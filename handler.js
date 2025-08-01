const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Practice Set</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to Calculator</h1><br><br>');
    res.write('<a href="/calculator">Go To Calculator</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (req.url === '/calculator') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write('<body>');
    res.write('<h2>Enter Two Numbers</h2>');
    res.write('<form action="/calculate-result" method="POST">');
    res.write('<input type="text" name="firstNumber" placeholder="Enter First Number" /><br><br>');
    res.write('<input type="text" name="secondNumber" placeholder="Enter Second Number" /><br><br>');
    res.write('<button type="submit">Sum</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
    // Delegate to external handler
    return sumRequestHandler(req, res);
  }

  // 404 fallback
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>404</title></head>');
  res.write('<body>');
  res.write('<h2>404 Page Not Found</h2>');
  res.write('<a href="/">Go To Home</a>');
  res.write('</body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;
