"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeWidgetIframe = void 0;

var _elementSelectors = require("../constants/elementSelectors");

const resizeWidgetIframe = ({
  height,
  width
}) => {
  const parent = document.getElementById(_elementSelectors.PARENT_ID);
  if (!parent || !width || !height) return;
  parent.style.width = `${width}px`;
  parent.style.height = `${height}px`;
};

exports.resizeWidgetIframe = resizeWidgetIframe;
