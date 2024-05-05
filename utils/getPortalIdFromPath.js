"use strict";

const pathRegex = /^\/(?:[A-Za-z0-9-_]*)\/(\d+)(?:\/|$)/;

function getPortalIdFromPath(path) {
  try {
    const match = pathRegex.exec(path);
    return match ? match[1] : '';
  } catch (error) {
    return '';
  }
}

module.exports = { getPortalIdFromPath };
