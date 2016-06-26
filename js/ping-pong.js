//exports is provided by Node and lets us export things from one file and bring them into another. Technically, it makes our function part of a module. A module is a group of JavaScript functions and data that comprises some sort of functionality.
exports.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 == 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}
