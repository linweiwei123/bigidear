##一、组件规范设计
###1、封装一个createComponent方法，根据组件数据，动态生成相应组件
###2、组件数据结构
```javascript
    {
        name: 'mui-swiper',
        js_address: 'http://xxx', //组件js所在地址,
        css_address: '', // 组件css所在地址，或者用css in js
        npm_name: '', //npm包名
        version: '', //版本,
        snapshot: '', //组件预览图
        options_in: {
            initData: {

            },
            props: { ... }, // 组件属性，需要细化值
            cssClass: {

            },
            cssStyle: {
               ... //key value的样式代码
            },
        },
        options_out: {
            events: {
                ... //键值对，组件内部触发的事件
            }
        }
    }
```

### 3、组件的预览图生成
通过pumpter后台拉取组件进行预览生成？

### 4、组件间的事件

## 二、编辑区域
### 前进、回退
参考vuex-undo-redo


