module.exports = {
  publicPath:'./',
  outputDir:'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  devServer: {
      port: 8080,
      host:'0.0.0.0',
      // proxy:
      // {
      //   '/api':
      //   {
      //     target:'http://114.80.222.219:8088/',
      //     // target:'http://192.168.1.18:9626/',
      //     changeOrigin:true,
      //     pathRewrite:
      //     {
      //       '^/api':''
      //     }
      //   }
      // }
  },
  lintOnSave: false
}