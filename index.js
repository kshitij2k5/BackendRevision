const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
  res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head>')
  res.write('<title>Myntra Page</title>');
  res.write('<nav>');
  res.write('<ul>');
  res.write('<li><a href="/">Home</a></li>');
  res.write('<li><a href="/about">About</a></li>'); 
  res.write('<li><a href="/contact">Contact</a></li>');
  res.write('<li><a href="/products">Products</a></li>');
  res.write('</ul>');
  res.write('</nav>');
  res.write('</head>')
  res.write('</html>');
  if(req.url=='/'){
    res.write('<h1>Welcome to the Home Page</h1>')
  }else if(req.url=='/about'){
    res.write('<h1>Welcome to the About Page</h1>')
  }else if(req.url=='/contact'){
    res.write('<h1>Welcome to the contact Page</h1>')
  }else if(req.url=='/products'){
    res.write('<h1>Welcome to the products Page</h1>')
  }
})
server.listen(3000,()=>{
  console.log("Server is runnning on PORT 3000");
  console.log("http://localhost:3000");
})