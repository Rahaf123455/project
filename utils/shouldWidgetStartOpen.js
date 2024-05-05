"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldWidgetStartOpen = shouldWidgetStartOpen;

var _cookieIsSet = require("../cookies/cookieIsSet");

var _operators = require("../cookies/operators");

var _settingsHelpers = require("../external-api/settingsHelpers");

var _constants = require("../cookies/constants");

var _urlHasHsChatHashLink = require("./urlHasHsChatHashLink");

var _stringToBoolean = require("./stringToBoolean");

function shouldWidgetStartOpen() {
  const inline = (0, _settingsHelpers.shouldEmbedInline)();

  if (!inline && (0, _cookieIsSet.cookieIsSet)(_constants.cookies.IS_OPEN)) {
    const isOpenCookie = (0, _operators.getCookie)(_constants.cookies.IS_OPEN);
    return (0, _stringToBoolean.stringToBoolean)(isOpenCookie);
  }

  return inline || (0, _urlHasHsChatHashLink.urlHasHsChatHashLink)(window.location.href) || undefined;
}

