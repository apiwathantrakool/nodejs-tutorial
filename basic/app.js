const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit(); // kill the process after the request.
});

server.listen(3000); // Listen on port 3000.
