const { postMessageToIframe } = require("./postMessageToIframe");

function executeAllIframeMessageQueueEvents({ iframe, iframeSrc, eventQueue }) {
  do {
    const event = eventQueue.dequeue();

    if (event) {
      const { type, data } = event;
      postMessageToIframe({ iframe, iframeSrc, type, data });
    }
  } while (eventQueue.peek() && Object.keys(eventQueue.peek()).length !== 0);
}

module.exports = {
  executeAllIframeMessageQueueEvents
};
