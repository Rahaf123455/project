function buildCmsScriptLoaderSrc({ portalId }) {
  return `/hs/scriptloader/${portalId}.js`;
}

module.exports = { buildCmsScriptLoaderSrc };
