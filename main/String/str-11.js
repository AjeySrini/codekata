// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let a=userInput[0].split("");

if(a.indexOf("A")==0 && a.indexOf("z")==(a.length-1) && a.indexOf("m")==((a.length-1)/2))
  console.log("1");
 else
 console.log("0");

  //end-here
});