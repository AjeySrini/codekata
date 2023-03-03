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
let a=userInput[0].split(" ").map(i=>parseInt(i));
let b=userInput[1].split(" ").map(i=>parseInt(i));
let max=Math.max.apply(null,b);

let c=max*(a[1]+a[2]+a[3]);
console.log(c);
});
