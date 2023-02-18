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
let c=[];
b.push(b[0]);
for(let i=0;i<b.length;i++){
    if(b[i]-b[i+1]>a[1]||b[i+1]-b[i]>a[1]){
        c.push("1")
    }else
    c.push("0");
}c.pop();
  console.log(c.join(" "));

  //end-here
});