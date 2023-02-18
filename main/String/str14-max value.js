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
  let unique = [...new Set(a)];
   unique.splice(NaN,1);
//   let max=Math.max(...unique);
  console.log(Math.max.apply(null,unique));
//   console.log(max);

  //end-here
});