module.exports = {
    // 基本路径
    publicPath: "./",
    // 输出文件目录
    outputDir: "dist",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
   
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require("os").cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see vuejs/vue-cli
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
      open: process.platform === "darwin",
      host: "0.0.0.0",
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: {
        '/boot': {
          target: 'http://localhost:8081',
          changeOrigin: true  //如果跨域，则需要配置此项
        }
      } 
    },
    // 第三方插件配置
    pluginOptions: {
      // ...
    }
  }