/**
 * Module dependencies
 */

var service = require('poe-service-node');

var app = module.exports = service();

app.register('math', 'add', function(req, res) {
  var answer = req.params.reduce(function(acc, num) {
    return acc + num;
  }, 0);
  res.send(answer);
});
