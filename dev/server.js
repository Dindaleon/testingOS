require('node-jsx').install();
import express from "express";
import path from "path";
import httpProxy from "http-proxy";
import React from "react";
import Router from "react-router";
import renderer from "react-engine";
  
import Routes from "./routes";

const proxy = httpProxy.createProxyServer();
const app = express();

// create the view engine with `react-engine`
var engine = renderer.server.create({
  reactRoutes: path.join(__dirname + '/routes')
});

/// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', __dirname + '/public/views');

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', renderer.expressView);

// Expose public folder as static assets
// Prevent static files to rerouted thorugh react-router
app.use('/public',express.static(__dirname + '/public'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//Check and set variable if app is on production or development
var node_enviroment = process.env.NODE_ENV || 'development';
console.log('checking ENV var: ' + process.env.NODE_ENV);
//var port = isProduction ? 5000 : 3000;
/*
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
*/

if (node_enviroment == 'production') {
  var server_port = process.env.OPENSHIFT_NODEJS_PORT;
  var server_ip_address = process.env.OPENSHIFT_NODEJS_IP;
} else {
  var server_port = 3000; 
  var server_ip_address = '127.0.0.1';
}
/*
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
*/
 //isProduction ? process.env.OPENSHIFT_NODEJS_PORT || 3000;


//isProduction ? process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


if (node_enviroment == 'development') {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var webpack = require('./webpack.js'); 
  webpack();

  // Here we redirect the public folder to our webpack server
  app.get('/public/*', function (req, res) {
      proxy.web(req, res, {
          target: 'http://localhost:1337'
      });
    });

  // Redirect all requests so react-router handles them. 
  app.get('/*', function (req, res) {
    res.render(req.url,{node_enviroment});
  });


  // It is important to catch any errors from the proxy or the
  // server will crash. An example of this is connecting to the
  // server when webpack is bundling
  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
  });

  // We need to use basic HTTP service to proxy
  // websocket requests from webpack
  //var server = http.createServer(app);  

  app.listen(server_port, server_ip_address, function () {
    console.log('Development Server running on port ' + server_port);
  }); 

} else {

  app.get('/*', function (req, res) {
    res.render(req.url,{node_enviroment});
  });

  app.listen(server_port, server_ip_address, function () {
    console.log('Production Server running on port ' + server_port);
  }); 
}
