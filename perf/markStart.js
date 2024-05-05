const { performance } = require('perf_hooks');
const { START_MARK_PRE_DELAY, START_MARK_POST_DELAY } = require('./constants');

function markStartPreDelay() {
  try {
    performance.mark(START_MARK_PRE_DELAY);
  } catch (e) {
    // Handle error if needed
  }
}

function markStartPostDelay() {
  try {
    performance.mark(START_MARK_POST_DELAY);
  } catch (e) {
    // Handle error if needed
  }
}

module.exports = {
  markStartPreDelay,
  markStartPostDelay
};
