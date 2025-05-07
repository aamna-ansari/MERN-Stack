// Private Function

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// Make it Public
// First method by using module export

module.exports = {
  add,
  sub,
};

// second using export

exports.multi = (a, b) => a * b;
exports.divid = (a, b) => a / b;
