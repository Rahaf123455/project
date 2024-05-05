const invariant = require("../utils/invariant");

const numberInvariant = (potentialNumber, numberName = '') => invariant(typeof potentialNumber === 'number', 'Expected %s to be a number, not a %s', numberName || potentialNumber, typeof potentialNumber);

module.exports = { numberInvariant };
