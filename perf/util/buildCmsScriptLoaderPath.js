const { buildCmsScriptLoaderSrc } = require("./buildCmsScriptLoaderSrc");

function buildCmsScriptLoaderPath({ portalId }) {
  const scriptSrc = buildCmsScriptLoaderSrc({ portalId });
  return `${document.location.origin}${scriptSrc}`;
}

module.exports = { buildCmsScriptLoaderPath };
