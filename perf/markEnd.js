const { performance } = require('perf_hooks');
const { END_MARK_POST_DELAY, END_MARK_PRE_DELAY } = require('./constants');

function markEndPostDelay() {
  try {
    performance.mark(END_MARK_POST_DELAY);
  } catch (e) {
    // Handle error if needed
  }
}

function markEndPreDelay() {
  try {
    performance.mark(END_MARK_PRE_DELAY);
  } catch (e) {
    // Handle error if needed
  }
}

module.exports = {
  markEndPostDelay,
  markEndPreDelay
};
