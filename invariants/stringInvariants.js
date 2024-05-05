const invariant = require("../utils/invariant");

function stringInvariant(potentialString, stringName = '') {
  invariant(typeof potentialString === 'string', 'Expected %s to be a string, not a %s', stringName || potentialString, typeof potentialString);
}

module.exports = { stringInvariant };
