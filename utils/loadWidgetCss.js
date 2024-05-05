"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadWidgetCss = loadWidgetCss;

var _messagesWidgetShellSass = require("../../sass/messagesWidgetShell.sass");

/**
 * Loads the widget's CSS file or injects the styles directly into the document.
 * @param {Document} doc
 */
function loadWidgetCss(doc) {
  const {
    hsConversationsSettings
  } = window;

  if (hsConversationsSettings && hsConversationsSettings.avoidInlineStyles) {
    const linkTag = doc.createElement('link');
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('type', 'text/css');
    linkTag.setAttribute('href', _messagesWidgetShellSass.default.replace('.sass', '.css'));
    doc.head.appendChild(linkTag);
  } else {
    const styleContent = require('raw-loader!../../sass/messagesWidgetShell.sass');

    const styleTag = doc.createElement('style');
    styleTag.setAttribute('type', 'text/css');
    const textTag = document.createTextNode(styleContent);
    styleTag.appendChild(textTag);
    doc.head.appendChild(styleTag);
  }
}
