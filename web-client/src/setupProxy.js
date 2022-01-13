const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  // eslint-disable-next-line no-console
  console.log("process.env.REACT_APP_API_SERVER", process.env.REACT_APP_API_SERVER);

  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_SERVER || "https://dev.itismy.space",
      changeOrigin: true
    })
  );
};
