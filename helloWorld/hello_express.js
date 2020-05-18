var express = require('express');
var app = express();
app.set('port', 32456);

// If visit root url, get this response:
app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('Welcome to the main page!');
});
// If visit /other-page, get this response:
app.get('/other-page', function(req, res) {
  res.type('text/plain');
  res.send('Welcome to the other page!');
});
// If don't select either of the above, get 404:
app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});
// Error handler:
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

// app.get() return the value previously saved to port.
// pass callback to app.listen.
app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:'
               + app.get('port')
               + '; press Ctrl-C to terminate.');
});
