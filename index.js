const http = require('http');
const server = http.createServer((req, res) => {
  //console.log(req.url,req.method,req.headers);
  //res.setHeader('content-type','json');
  res.setHeader('content-type', 'text/html');
  if (req.url == "/") {
   return  res.end('<h1>elcome to the Home Page</h1>');
  }
  else if (req.url == '/about') {
    return res.end("<h2>Welcome to the about page</h2>")
  }
  else if (req.url == 'contact') {
return res.end("<h2>welcome to the about page</h2>")
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    return res.end('<h1>Page not found</h1>');
  }
  
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1><h2>Like/share/subscribe</h2></body>');
  res.write('</html>');
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
