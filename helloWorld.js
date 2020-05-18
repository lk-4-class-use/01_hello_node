// Version 1. Lecture video code.

// (1) import the http module, and
// (2) assign that module to the http variable.

var http = require('http');
// (3) createServer takes one argument -- a function, event-listener
// (4) event listener will take two argument every time a request is sent in
//     by the server a request object and a response object.
// The request: has information about what the client requested.
// The response: is how we will send stuff back to the client.
http.createServer(function(request,response){
// writeHead sets the status code and lets us set header information.
// In this case, we are sending back plain, unformatted text.

  // response.writeHead(200, { 'Content-Type': 'text/plain' });
// end says that after the data inside the function is sent,
// we are done and the response is complete.

  // response.end('Hello world!');

// // Send HTML instead:
response.writeHead(200, {'Content-Type': 'text/html'});
response.end('<h2>Hello world!</h2> <p>Hello node!</p>');

// Once the server is created, we call the listen method
// and provide the port we want it to listen on
}).listen(3000);

// Log a message just so we know that it got kicked of successfully
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
