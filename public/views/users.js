'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

  displayName: 'account',

  onButtonClick: function onButtonClick() {
    alert('Happy Reacting!');
  },

  render: function render() {

    return React.createElement(
      'div',
      { id: 'account' },
      React.createElement(
        'h1',
        null,
        this.props.name
      ),
      React.createElement(
        'h6',
        null,
        'Welcome to my Users Page!'
      ),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        'a',
        { href: '/' },
        'go back to index (unahandled)'
      ),
      React.createElement(
        Link,
        { to: '/' },
        'go back home'
      )
    );
  }
});