"use strict";

const { doRequest, DONE_STATE } = require("../requests/http");
const { API_REQUEST_RESULT } = require("./constants/sentPostMessageTypes");

class PostMessageApiClient {
  constructor(postMessage) {
    this.postMessage = postMessage;
    this.currentRequest = null;
  }

  makeApiRequest({ data }) {
    const { type, url, data: requestData } = data;
    const fullUrl = `/_hcms${url}`;

    if (this.currentRequest && this.currentRequest.readyState !== DONE_STATE) {
      this.abortCurrentApiRequest();
    }

    this.currentRequest = doRequest(type)(fullUrl, requestData)((result, error) => {
      if (!error) {
        this.postMessage(API_REQUEST_RESULT, {
          result: 'succeeded',
          data: result,
          url
        });
      } else {
        this.postMessage(API_REQUEST_RESULT, {
          result: 'failed',
          data: error,
          url
        });
      }
    });
  }

  abortCurrentApiRequest() {
    if (this.currentRequest) {
      this.currentRequest.abort();
    }
  }
}

module.exports = {
  PostMessageApiClient
};
