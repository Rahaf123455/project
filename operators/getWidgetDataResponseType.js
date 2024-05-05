"use strict";

const TYPE = '@type';

function getWidgetDataResponseType(widgetData) {
  return widgetData && typeof widgetData === 'object' ? widgetData[TYPE] : undefined;
}

module.exports = {
  getWidgetDataResponseType
};
