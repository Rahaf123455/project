const invariant = require("../utils/invariant");

const booleanInvariant = (potentialBoolean, booleanName) => invariant(potentialBoolean === true || potentialBoolean === false, `Expected %s to be a boolean but received a %s`, booleanName || potentialBoolean, typeof potentialBoolean);

module.exports = { booleanInvariant };
