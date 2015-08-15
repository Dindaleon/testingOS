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
        'Welcome to my Base ReactJS app!'
      ),
      React.createElement(
        'button',
        { onClick: this.onButtonClick },
        'Click me for some fun...'
      ),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        'a',
        { href: '/some_unknown' },
        'This is an unhadled route'
      ),
      React.createElement(
        Link,
        { to: 'users' },
        'Go to users (handled)'
      )
    );
  }
});