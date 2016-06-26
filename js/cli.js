//cli stands for command line interface

var pingPong = require('./ping-pong.js').pingPong;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(err,result) {
  // var goal = prompt('What number would you like me to ping-pong up to?');
  // console.log('Ping-ponging up to 100!');
  var result = pingPong(result.goal);
  result.forEach(function(element) {
    console.log(element);
  });
})
