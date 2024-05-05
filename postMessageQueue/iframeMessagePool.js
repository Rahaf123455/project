import { getIframeFromDocumentQuery } from "./getIframeFromDocumentQuery";
import { postMessageToIframe } from "./postMessageToIframe";
import { executeAllIframeMessageQueueEvents } from "./executeAllIframeMessageQueueEvents";

function createQueue() {
  const queue = [];
  return {
    enqueue: (event) => queue.unshift(event),
    dequeue: () => queue.shift(),
    peek: () => queue[0],
  };
}

function iframeMessagePool({ iframeSrc }) {
  const eventQueue = createQueue();
  return {
    post: (type, data = {}) => {
      const iframe = getIframeFromDocumentQuery();
      const isNotLoaded = iframe && iframe.contentDocument && iframe.contentDocument.URL === "about:blank";

      if (!iframe || isNotLoaded) {
        eventQueue.enqueue({ type, data });
      } else {
        postMessageToIframe({ iframe, iframeSrc, type, data });
        executeAllIframeMessageQueueEvents({ iframe, iframeSrc, eventQueue });
      }
    },
  };
}

export { createQueue, iframeMessagePool };
