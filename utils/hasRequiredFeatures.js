"use strict";

function hasRequiredFeatures(window) {
  const featureDetectors = [
    typeof window.WeakMap === 'function',
    typeof window.requestAnimationFrame === 'function',
    typeof window.URLSearchParams === 'function',
    typeof Object.fromEntries === 'function'
  ];
  return featureDetectors.every(featureDetector => featureDetector);
}

module.exports = { hasRequiredFeatures };
