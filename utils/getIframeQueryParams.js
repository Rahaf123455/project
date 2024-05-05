const getIframeQueryParams = ({
  messagesUtk,
  hubspotUtk,
  portalId,
  iframeUuid,
  globalCookieOptOut,
  isFirstVisitorSession,
  hstc
}) => {
  const mobile = /* Your logic to determine if mobile */ typeof window.orientation !== 'undefined' || navigator.userAgent.includes('Mobi');
  const inline = /* Your logic to determine if inline */ false; // Replace with your logic
  const startOpen = /* Your logic to determine if start open */ true; // Replace with your logic
  const initialInputFocusDisabled = /* Your logic to determine if initial input focus is disabled */ false; // Replace with your logic
  const isInitialInputFocusDisabled = inline && initialInputFocusDisabled;
  const queryParams = {
    uuid: iframeUuid,
    mobile,
    mobileSafari: /iPad|iPhone|iPod/.test(navigator.userAgent),
    hideWelcomeMessage: document.cookie.indexOf('HIDE_WELCOME_MESSAGE=true') !== -1,
    hstc,
    domain: window.location.hostname.replace(/^www\./, ''),
    inApp53: portalId === 53,
    messagesUtk,
    url: window.location.href,
    inline,
    isFullscreen: false, // Your logic to determine if fullscreen
    globalCookieOptOut,
    isFirstVisitorSession,
    isAttachmentDisabled: false, // Your logic to determine if attachment is disabled
    isInitialInputFocusDisabled,
    enableWidgetCookieBanner: true, // Your logic to determine if widget cookie banner is enabled
    isInCMS: typeof hsVars !== 'undefined'
  };

  if (typeof startOpen !== 'undefined') {
    queryParams.startOpen = startOpen;
  }

  if (hubspotUtk) {
    queryParams.hubspotUtk = hubspotUtk;
  }

  return queryParams;
};

module.exports = { getIframeQueryParams };

  if (typeof startOpen !== 'undefined') {
    queryParams.startOpen = startOpen;
  }

  if (hubspotUtk) {
    queryParams.hubspotUtk = hubspotUtk;
  }

  return queryParams;
;

module.exports = { getIframeQueryParams };
