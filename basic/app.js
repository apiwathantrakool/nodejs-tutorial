const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit(); // kill the process after the request.
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World</h1>');
  res.write('Hello World: ' + new Date());
  res.end();
});

server.listen(3000); // Listen on port 3000.
