"use strict";

const { ALIGNED_LEFT_CLASS, ALIGNED_RIGHT_CLASS } = require("../constants/widgetClassNames");
const { LEFT_ALIGNED, RIGHT_ALIGNED } = require("../constants/widgetLocation");

const classNames = {
  [LEFT_ALIGNED]: ALIGNED_LEFT_CLASS,
  [RIGHT_ALIGNED]: ALIGNED_RIGHT_CLASS
};

const setClassInClassList = ({ widgetLocation, classList }) => {
  const widgetLocationClass = classNames[widgetLocation];

  if (!classList.contains(widgetLocationClass)) {
    const otherLocations = Object.keys(classNames).filter(className => className !== widgetLocation);
    otherLocations.forEach(location => {
      classList.remove(classNames[location]);
    });
    classList.add(widgetLocationClass);
  }
};

module.exports = {
  setClassInClassList
};
