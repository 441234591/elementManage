const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 80,
    open: true,
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_variable.scss";`,
      },
    },
  },
})
