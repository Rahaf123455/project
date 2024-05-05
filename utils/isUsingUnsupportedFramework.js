"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUsingUnsupportedFramework = void 0;

var _unsupportedFramework = require("../constants/unsupportedFramework");

const isUsingUnsupportedFramework = () => {
  const overriddenMethods = _unsupportedFramework.METHODS.filter(method => !!method).length;

  return Boolean(overriddenMethods);
};

exports.isUsingUnsupportedFramework = isUsingUnsupportedFramework;
