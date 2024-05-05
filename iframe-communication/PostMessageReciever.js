"use strict";

class PostMessageReceiver {
  constructor(messageHandlers, { allowedOrigin, iframeUuid }) {
    this.allowedOrigin = allowedOrigin;
    this.iframeUuid = iframeUuid;
    this._handlers = messageHandlers;
    this.handleMessage = this.handleMessage.bind(this);
    window.addEventListener('message', this.handleMessage);
  }

  isOriginAllowed(origin) {
    return origin === this.allowedOrigin;
  }

  handleMessage(messageEvent) {
    const { data: rawData, origin, source } = messageEvent;

    if (!this.isOriginAllowed(origin)) {
      return;
    }

    try {
      const parsedData = JSON.parse(rawData);

      if (parsedData.uuid !== this.iframeUuid) {
        return;
      }

      const { type, data } = parsedData;
      const handler = this._handlers[type];

      if (typeof handler === 'function') {
        handler({ data, source });
      }
    } catch (e) {
      return;
    }
  }

  register(type, method) {
    this._handlers[type] = method;
  }
}

module.exports = {
  PostMessageReceiver
};
