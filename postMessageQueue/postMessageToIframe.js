function postMessageToIframe({ iframe, iframeSrc, type, data }) {
  iframe.contentWindow.postMessage(JSON.stringify({ type, data }), iframeSrc);
}

export { postMessageToIframe };
