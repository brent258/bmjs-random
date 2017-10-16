module.exports = function() {
  if (arguments.length > 0) {
    return arguments[Math.floor(Math.random() * arguments.length)];
  }
};
