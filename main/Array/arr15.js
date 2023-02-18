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
let a=userInput[1].split(" ");
let unique =[...new Set(a)];
let c=[];
for(let i=0;i<unique.length;i++){
   let b= a.filter(x => x == unique[i]).length;
   if(b!=3){
       c.push(unique[i]);
   }
}
  console.log(c.join(''));


  //end-here
});