const { resolve } = require('path')

/*
    根据Vue Cli配置的一些常用配置项, 具体参考(https://cli.vuejs.org/zh/config/#pages)
*/
module.exports = {
  productionSourceMap: false, // 生成环境是否开启SourceMap(source map的作用就是定位。source map定位的时浏览器控制台输出语句在项目文件的位置。)
  filenameHashing: false, // build之后生成的静态资源默认情况下加了hash值以控制静态资源的缓存，默认是true
  publicPath: '/', // 部署应用包时的基本 URL(可以通过三元运算去配置dev和prod环境, publicPath: process.env.NODE_ENV === 'production' ? '/prod/' : './')
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  outputDir: 'dist', // 打包输出文件目录
  assetsDir: 'assets', // 放置静态文件夹目录
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  transpileDependencies: [], // Babel 显式转译列表
  crossorigin: '', // 设置生成的 HTML 中 <link rel='stylesheet'> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
  integrity: false, // 在生成的 HTML 中的 <link rel='stylesheet'> 和 <script> 标签上启用 Subresource Integrity (SRI)
  /*
        如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
        如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
    */
  configureWebpack: {},

  chainWebpack: (config) => {
    config.reslove.alias.set('@', resolve('src')).set('@components', resolve('src/components')).set('@layout', resolve('src/layout'))


  },// 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)

  
}
