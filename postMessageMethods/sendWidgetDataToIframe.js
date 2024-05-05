const { throttleInProductInitialMessagePopups } = require("../utils/throttleInProductInitialMessagePopups");
const { getExternalApiSettings } = require("../external-api/getExternalApiSettings");
const { getIframeQueryParams } = require("../utils/getIframeQueryParams");
const { WIDGET_DATA } = require("../iframe-communication/constants/sentPostMessageTypes");

function sendWidgetDataToIframe({ source, widgetData, embedScriptContext, apiUsageTracker }) {
  const iframeData = Object.assign({}, widgetData, getIframeQueryParams(embedScriptContext));
  source.postMessage(JSON.stringify({
    type: WIDGET_DATA,
    data: iframeData
  }), '*');
  throttleInProductInitialMessagePopups(embedScriptContext);
  apiUsageTracker.trackSettingsUsed(getExternalApiSettings());
}

module.exports = {
  sendWidgetDataToIframe
};
