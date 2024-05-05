"use strict";

const { getExternalApiSettings } = require("./getExternalApiSettings");

const shouldLoadImmediately = () => !!getExternalApiSettings().loadImmediately;
const shouldBeFullscreen = () => !!getExternalApiSettings().isFullscreen;
const getInlineEmbedSelector = () => getExternalApiSettings().inlineEmbedSelector;
const shouldEmbedInline = () => !!getExternalApiSettings().inlineEmbedSelector;
const shouldDisableAttachment = () => !!getExternalApiSettings().disableAttachment;
const shouldDisableInitialInputFocus = () => !!getExternalApiSettings().disableInitialInputFocus;
const getEnableWidgetCookieBanner = () => getExternalApiSettings().enableWidgetCookieBanner;
const getIdentificationEmail = () => getExternalApiSettings().identificationEmail;
const getIdentificationToken = () => getExternalApiSettings().identificationToken;

module.exports = {
  shouldLoadImmediately,
  shouldBeFullscreen,
  getInlineEmbedSelector,
  shouldEmbedInline,
  shouldDisableAttachment,
  shouldDisableInitialInputFocus,
  getEnableWidgetCookieBanner,
  getIdentificationEmail,
  getIdentificationToken
};
