"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _publicViewsApp = require("./public/views/app");

var _publicViewsApp2 = _interopRequireDefault(_publicViewsApp);

var _publicViews404 = require("./public/views/404");

var _publicViews4042 = _interopRequireDefault(_publicViews404);

var _publicViewsAccount = require("./public/views/account");

var _publicViewsAccount2 = _interopRequireDefault(_publicViewsAccount);

var _publicViewsUsers = require("./public/views/users");

var _publicViewsUsers2 = _interopRequireDefault(_publicViewsUsers);

exports["default"] = _react2["default"].createElement(
  _reactRouter.Route,
  { path: "/", handler: _publicViewsApp2["default"] },
  _react2["default"].createElement(_reactRouter.DefaultRoute, { name: "account", handler: _publicViewsAccount2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, { name: "users", handler: _publicViewsUsers2["default"] }),
  _react2["default"].createElement(_reactRouter.NotFoundRoute, { handler: _publicViews4042["default"] })
);
module.exports = exports["default"];