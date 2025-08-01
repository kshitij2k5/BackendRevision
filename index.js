const http = require('http');
const fs=require('fs');
const requestHandler=(req, res) => {
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>Complete Coding!</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name"><br><br>');

    res.write('<input type="radio" name="gender" id="male" value="male">');
    res.write('<label for="male">Male</label><br>');

    res.write('<input type="radio" name="gender" id="female" value="female">');
    res.write('<label for="female">Female</label><br><br>');

    res.write('<input type="submit" value="Submit"> ');
    res.write('<input type="reset" value="Reset">');

    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }else if(req.url.toLowerCase()=="/submit-details" && req.method=="POST"){
    const body=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end',()=>{
      const fullBody=Buffer.concat(body).toString();
      console.log(fullBody);
      const params=new URLSearchParams(fullBody);
      const jsonObject={};
      for (const [key,value] of params.entries()){
        jsonObject[key]=value;
      }
      console.log(jsonObject);
      fs.writeFile('user.txt',JSON.stringify(jsonObject),()=>{
    console.log("File Created");
   })
    })
   
   res.statusCode = 302;
   res.setHeader('Location','/');
   return res.end();
  }
};
module.exports=requestHandler;