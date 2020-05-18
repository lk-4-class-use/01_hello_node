var express = require('express');  // use the 'express' module
var app = express();            // call to express() returns Express application
app.set('port', 32456);         // set function lets us save properties
                                // often global setting for the app
                                // 'port' globally references what port we'll be
                                // using -- it is a property on an object.
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

// 'use' function; mounts middleware at a path.
// There is no obvious path in the two calls to .use()
// They are catch-all handlers.

// If don't select either of the above, get 404:
// We don't call next from the error 404 page.
app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});
// Error handler:
// next argument -- is the function to call to let express
// know to move on to the next middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

// app.get() return the value previously saved to port.
// pass callback to app.listen.

// app.get('port') argument: retrieve the port value
// function() argument: callback to call when the server is started

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:'
               + app.get('port')
               + '; press Ctrl-C to terminate.');
});

// Read this line in terminal -- test git push, pull commands
