const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  devServer: {
    host: 'u001.marcozordan.it',
    port: 8080,
    server: {
      type: 'https',
    },
    proxy: {
      "/api": {
        target: 'https://u001.marcozordan.it/',
        pathRewrite: { '^/api': '' },
      },
    }
  }
})
