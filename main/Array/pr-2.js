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
let a=userInput[0].split(" ");
let b=a[0].split("");
let c=+a[1]-1;
let d=+a[1];
let e=[];
for(let i=0;i<b.length;i++){
  if((c)==i){
  b[i]=b[i].toUpperCase();
 e.push(b[i]);
 c=c+d;
 }else
  e.push(b[i]);
}
console.log(e.join(""));


});