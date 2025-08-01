const requestHandler=require('./index');
const http = require('http');
const server = http.createServer(requestHandler);
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
