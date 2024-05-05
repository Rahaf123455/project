const invariant = require("../utils/invariant");

function oneOfListInvariant(potentialVar, potentialVarName, listOfOptions) {
  invariant(listOfOptions.indexOf(potentialVar) > -1, `Expected %s to be one of ${listOfOptions.toString()} but got %s`, potentialVarName, potentialVar);
}

module.exports = { oneOfListInvariant };
