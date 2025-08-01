const querystring = require('querystring');

const sumRequestHandler = (req, res) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const parsedBody = querystring.parse(body);
    const num1 = parseFloat(parsedBody.firstNumber);
    const num2 = parseFloat(parsedBody.secondNumber);
    const sum = num1 + num2;

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Result</title></head>');
    res.write('<body>');
    res.write(`<h3>The sum of ${num1} and ${num2} is ${sum}</h3>`);
    res.write('<a href="/">Go Back Home</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  });
};

module.exports = { sumRequestHandler };
