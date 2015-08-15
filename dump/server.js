"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _httpProxy = require("http-proxy");

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactEngine = require("react-engine");

var _reactEngine2 = _interopRequireDefault(_reactEngine);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

require("node-jsx").install();

var proxy = _httpProxy2["default"].createProxyServer();
var app = (0, _express2["default"])();

// create the view engine with `react-engine`
var engine = _reactEngine2["default"].server.create({
  reactRoutes: _path2["default"].join(__dirname + "/routes")
});

/// set the engine
app.engine(".jsx", engine);

// set the view directory
app.set("views", __dirname + "/public/views");

// set jsx as the view engine
app.set("view engine", "jsx");

// finally, set the custom view
app.set("view", _reactEngine2["default"].expressView);

//expose public folder as static assets
//app.use('/public', express.static('public'));

// Prevent static files to rerouted thorugh react-router
app.use("/public", _express2["default"]["static"](__dirname + "/public"));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//Check and set variable if app is on production or development
var isProduction = process.env.NODE_ENV === "production";
var port = isProduction ? 5000 : 3000;
/*
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var webpack = require("./webpack.js");
  webpack();

  // Here we redirect the public folder to our webpack server
  app.get("/public/*", function (req, res) {
    proxy.web(req, res, {
      target: "http://localhost:1337"
    });
  });

  // Redirect all requests so react-router handles them.
  app.get("/*", function (req, res) {
    res.render(req.url, { isProduction: isProduction });
  });

  // It is important to catch any errors from the proxy or the
  // server will crash. An example of this is connecting to the
  // server when webpack is bundling
  proxy.on("error", function (e) {
    console.log("Could not connect to proxy, please try again...");
  });

  // We need to use basic HTTP service to proxy
  // websocket requests from webpack
  //var server = http.createServer(app); 

  app.listen(port, function () {
    console.log("Development Server running on port " + port);
  });
} else {
*/


  app.get("/*", function (req, res) {
    res.render(req.url, { isProduction: isProduction });
  });

  var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

  app.listen(server_port, server_ip_address, function () {
    console.log("Production Server running on port " + port);
  });
  /*
}*/