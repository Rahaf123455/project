"use strict";

const { setCookie } = require("../cookies/operators");
const { cookies } = require("../cookies/constants");
const { THIRTY_MINUTES } = require("../cookies/times");

function hideWelcomeMessage() {
  setCookie(cookies.HIDE_WELCOME_MESSAGE, true, THIRTY_MINUTES);
}

module.exports = { hideWelcomeMessage };
