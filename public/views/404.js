'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

  displayName: '404 Page Not Found',

  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      { id: 'pageNotFound' },
      React.createElement(
        'h1',
        null,
        this.props.name,
        '404 Page Not Found'
      ),
      React.createElement(
        'h6',
        null,
        'We are sorry but the page you were looking for could not be found!'
      ),
      React.createElement(
        'div',
        { onClick: function () {
            return _this.goBack();
          } },
        'Go back'
      )
    );
  }
});