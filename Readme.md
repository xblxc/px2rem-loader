### px2rem-loader

鉴于postcss-px2rem插件只支持css文件中的px转换，而js中偶尔也是需要的，于是开发了本loader

### Install:
```
  npm i -D @away/px2rem-loader
```

#### Options:

- remUnit: [Number] 转换比例
- delimiter: [String] 用于识别的分隔符，默认`REM`  
  eg: 当remUnit定义为100时，则`width = REM(100px)` => `width = 1rem`