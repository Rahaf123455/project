"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInSDK = void 0;

const isInSDK = () => /\bHub[sS]pot ?Mobile ?SDK\b/.test(window.navigator.userAgent);

exports.isInSDK = isInSDK;
