/**
 * Module dependencies
 */

var service = require('poe-service-node');

var app = module.exports = service();

app.register('math', 'add', function(req, res) {
  if (!Array.isArray(req.params)) return res.send('Invalid arguments');

  var answer = req.params.reduce(function(acc, num) {
    return acc + num;
  }, 0);

  res.send(answer);
});
