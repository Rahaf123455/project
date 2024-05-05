"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventTypeInvariant = void 0;

var _invariant = _interopRequireDefault(require("../../utils/invariant"));

var eventTypeConstants = _interopRequireWildcard(require("../constants/eventTypeConstants"));

const eventTypeValues = Object.values(eventTypeConstants);

const eventTypeInvariant = potentialEventType => (0, _invariant.default)(eventTypeValues.indexOf(potentialEventType) !== -1, `Expected a valid event type but received ${potentialEventType}. Valid event types include ${eventTypeValues}.`);

exports.eventTypeInvariant = eventTypeInvariant;