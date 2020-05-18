// This is a lot like the first code sample, but now we have some actual routes.
// Routes are basically a mapping of a URL to a resource.

// NOTE: If we wanted to handle POST requests,
// then we would add a route using the post method of the app instead.

// app.get and app.post are sort of wrappers for app.use.

// They just are specifically for different kinds of requests
// and are what we are going to generally be using in this class.

var express = require('express');
var app = express();
app.set('port', 3000);

// Use the app's GET method: GET requests are directed to this page

// Map the root URL / to the function that says this is the main page.
app.get('/',function(req, res){
  res.type('text/plain');
  res.send('Welcome to the main page!');
});

// Map the URL ending in /other-page to the function that returns a text.
app.get('/other-page',function(req, res){
  res.type('text/plain');
  res.send('Welcome to the other page!');
});

// If we enter in some gibberish URL, then we end up at the 404 page.
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// If we somehow cause an error to be thrown, we end up at the 500 page.
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
