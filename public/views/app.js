'use strict';

var Layout = require('./layout');
var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {

    return React.createElement(
      Layout,
      this.props,
      React.createElement(Router.RouteHandler, this.props)
    );
  }
});