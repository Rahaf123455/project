"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChatflowTagFromQueryParams = getChatflowTagFromQueryParams;

function getChatflowTagFromQueryParams() {
  const url = new URL(window.location.href);
  return url.searchParams.get('chatflow') || '';
}
