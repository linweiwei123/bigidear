import {Controller, Get, HttpStatus, Res} from '@nestjs/common';
import { AppService } from './app.service';
import { exec } from 'child_process';
import { resolve } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('build')
  async webpackBuild(): Promise<String> {
    console.log('运行路径', resolve('buildspace/space/h5') );
    return new Promise((rs, rj) => {
        exec('npm install', { cwd: resolve('buildspace/space/h5') }, function (error, stdout, stderr) {
            console.log('出错了', error);
            console.log('stdout', stdout);
            console.log('stderr', stderr);

            // npm install结束
            exec('npm run build demo', { cwd: resolve('buildspace/space/h5')}, function (error, stdout, stderr) {
                console.log('出错了', error);
                console.log('stdout', stdout);
                console.log('stderr', stderr);
                console.log('编译完成');
                rs('done');
            })
        });
    })

  }
}
