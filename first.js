const fs=require('fs');
console.log("KG Coding is the best!");
let a=20;
let b=20;
let sum=a+b;
let data=`The sum of ${a} and ${b} is ${sum}`;
fs.writeFile("ouput.txt",data,(err)=>{
  if(err){
    console.log("Error is present in the Code");
   } else {
      console.log("File Written Successfully");
    }
})