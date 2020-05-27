const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/apis', {
        target: 'http://localhost:63130',
        changeOrigin: true
    }),
    proxy('/proxy', {
        target: 'http://localhost:63130',
        changeOrigin: true
    })
  );
};