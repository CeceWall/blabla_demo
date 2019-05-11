module.exports = {
  devServer: {
    proxy: {
      '/posts': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
      }
    }
  }
}