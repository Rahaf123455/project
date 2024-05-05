"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareVisitorIdentifiers = void 0;

var _chooseMessagesUtk = require("./chooseMessagesUtk");

var _getMessagesUtkFromCookie = require("./getMessagesUtkFromCookie");

var _getHubSpotUtkFromCookie = require("./getHubSpotUtkFromCookie");

var _getGlobalCookieOptOut = require("./getGlobalCookieOptOut");

var _getHstcFromCookie = require("../utils/getHstcFromCookie");

var _getHsscFromCookie = require("../utils/getHsscFromCookie");

var _setMessagesUtk = require("./setMessagesUtk");

const prepareVisitorIdentifiers = () => {
  const existingMessagesUtk = (0, _getMessagesUtkFromCookie.getMessagesUtkFromCookie)();

  if (existingMessagesUtk) {
    (0, _setMessagesUtk.setMessagesUtk)(existingMessagesUtk);
  }

  const hubspotUtk = (0, _getHubSpotUtkFromCookie.getHubSpotUtkFromCookie)();
  const hstc = (0, _getHstcFromCookie.getHstcFromCookie)();
  const hssc = (0, _getHsscFromCookie.getHsscFromCookie)();
  const globalCookieOptOut = (0, _getGlobalCookieOptOut.getGlobalCookieOptOut)();
  const {
    messagesUtk,
    isFirstVisitorSession
  } = (0, _chooseMessagesUtk.chooseMessagesUtk)({
    existingMessagesUtk
  });
  return {
    messagesUtk,
    hubspotUtk,
    hstc,
    hssc,
    globalCookieOptOut,
    isFirstVisitorSession
  };
};

exports.prepareVisitorIdentifiers = prepareVisitorIdentifiers;
