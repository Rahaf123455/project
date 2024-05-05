"use strict";

const { isAnyMobile } = require("./whichDevice");
const { getWidgetDataResponseType } = require("../operators/getWidgetDataResponseType");
const { HIDE_WIDGET } = require("../constants/widgetResponseTypes");
const { getDelayLoadingWidgetIframe } = require("./getDelayLoadingWidgetIframe");
const { EVENTS } = require("../events");
const { markEndPreDelay, markStartPostDelay } = require("../perf");

function handleTargetingAndDelay(setWidgetData, loadIFrame, setWidgetNotLoaded) {
  return function (widgetData) {
    const hideWidget = getWidgetDataResponseType(widgetData) === HIDE_WIDGET;
    const initialize = !hideWidget && !!widgetData.sessionId;

    if (initialize) {
      const { shouldDelayLoadingIframe, timeDelay } = getDelayLoadingWidgetIframe(widgetData, isAnyMobile());
      markEndPreDelay();

      if (shouldDelayLoadingIframe) {
        setTimeout(() => {
          setWidgetData(widgetData);
          markStartPostDelay();
          loadIFrame();
        }, timeDelay);
      } else {
        setWidgetData(widgetData);
        markStartPostDelay();
        loadIFrame();
      }
    } else {
      const { description, reason } = widgetData.metadata || {};
      setWidgetNotLoaded({ description, reason });
    }

    EVENTS.messagesInitialized({ messageWillRender: initialize });
  };
}

module.exports = { handleTargetingAndDelay };
