var http = require('http');
http.createServer(function(req,res){
// normalize url by removing querystring, optional
// trailing slash, and making it lowercase
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path) {
    case '':
      // Browse to your homepage at http://localhost:3000
      // Query strings will be ingorede http://localhost:3000/?foo=bar
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Homepage');
      break;
    case '/about':
      // Browse to about page at http://localhost:3000/about
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About');
      break;
    default:
      // any other URL (http://localhost:3000/foo) will serve the Not Found page
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      break;
  }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
