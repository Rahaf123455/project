"use strict";

const { ON_READY_CALLBACKS } = require("./constants");

function flushOnReadyCallbacks({ logger, trackCallback }) {
  const callbacks = window[ON_READY_CALLBACKS];

  if (Array.isArray(callbacks)) {
    if (trackCallback) trackCallback();
    callbacks.forEach(cb => {
      try {
        cb();
      } catch (err) {
        if (err instanceof Error) {
          logger.error(err.message);
        }
      }
    });
  }
}

module.exports = { flushOnReadyCallbacks };