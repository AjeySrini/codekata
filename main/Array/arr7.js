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
let a=userInput[1].split(" ").map(i=>parseInt(i));
let max=Math.max.apply(null,a);
console.log(max);
let min=Math.min.apply(null,a);
console.log(min);
let v=a.sort((a,b)=>a-b);
console.log(v);
let s=a.sort((a,b)=>b-a);
console.log(s);
let b=a.indexOf(max);
let c=a.indexOf(min);
  console.log(b-c);

  //end-here
});