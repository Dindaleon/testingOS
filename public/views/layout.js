'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    var scripts;

    if (!this.props.isProduction) {
      scripts = React.createElement(
        'div',
        null,
        React.createElement('script', { src: '/public/vendors.js' }),
        React.createElement('script', { src: '/public/a.js' }),
        React.createElement('script', { src: '/public/b.js' }),
        React.createElement('script', { src: '/public/app.js' })
      );
    } else {
      scripts = React.createElement(
        'div',
        null,
        React.createElement('script', { src: '/public/vendors.js' }),
        React.createElement('script', { src: '/public/app.js' })
      );
    }

    return React.createElement(
      'html',
      null,
      React.createElement(
        'head',
        null,
        React.createElement('meta', { charSet: 'utf-8' }),
        React.createElement(
          'title',
          null,
          this.props.title
        )
      ),
      React.createElement(
        'body',
        null,
        this.props.children
      ),
      scripts
    );
  }
});