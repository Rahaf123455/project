import { shouldEmbedInline, getInlineEmbedSelector } from "../external-api/settingsHelpers";
import { PARENT_ID } from "../constants/elementSelectors";

function getIframeFromDocumentQuery() {
  const parentQuery = shouldEmbedInline() ? getInlineEmbedSelector() : `#${PARENT_ID}`;
  return document.querySelector(`${parentQuery} iframe`);
}

export { getIframeFromDocumentQuery };
