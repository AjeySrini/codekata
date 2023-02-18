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
let a=userInput[0].split("").map(i=>parseInt(i));
let b=[];
for(let i=0;i<a.length;i++){
    if(a[i]%2==1){
        b.push(a[i]);
    }
}


if(b.length>0)
console.log(b.join(" "));
else 
console.log("-1");
  //end-here
});