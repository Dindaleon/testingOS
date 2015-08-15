"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require("webpack-dev-server");

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpackDevelopmentConfig = require("../webpack.development.config");

var _webpackDevelopmentConfig2 = _interopRequireDefault(_webpackDevelopmentConfig);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

module.exports = function () {

  // First we fire up Webpack an pass in the configuration we
  // created
  var bundleStart = null;
  var compiler = (0, _webpack2["default"])(_webpackDevelopmentConfig2["default"]);

  // We give notice in the terminal when it starts bundling and
  // set the time it started
  compiler.plugin("compile", function () {
    console.log("Bundling...");
    bundleStart = Date.now();
  });

  // We also give notice when it is done compiling, including the
  // time it took. Nice to have
  compiler.plugin("done", function () {
    console.log("Bundled in " + (Date.now() - bundleStart) + "ms!");
  });

  var bundler = new _webpackDevServer2["default"](compiler, {

    // We need to tell Webpack to serve our bundled application
    // from the build path. When proxying:
    publicPath: "http://localhost:1337/public/",
    // Configure hot replacement
    hot: true,
    // The rest is terminal configurations
    quiet: false,
    noInfo: true,
    progress: true,
    stats: {
      colors: true
    }
  });

  // We fire up the development server and give notice in the terminal
  // that we are starting the initial bundle
  bundler.listen(1337, "localhost", function () {
    console.log("Bundling project, please wait...");
  });
};