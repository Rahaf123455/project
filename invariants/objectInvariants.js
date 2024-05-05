const invariant = require("../utils/invariant");

const objectInvariant = (potentialObject, objectName = '') => invariant(typeof potentialObject === 'object' && potentialObject !== null, `Expected %s to be an object`, objectName || potentialObject);

module.exports = { objectInvariant };
