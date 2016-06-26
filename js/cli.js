//cli stands for command line interface
// We can use the Node Package Manager or npm to install tools from the command line to use in our project. When we installed Node.js, npm was also installed automatically. For this project, we're going to download a package which lets us ask for user input from the command line.
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
