const invariant = require("../utils/invariant");

const functionInvariant = (potentialFunction) => invariant(typeof potentialFunction === 'function' && potentialFunction !== null, `Expected %s to be a function`, potentialFunction);

module.exports = { functionInvariant };
