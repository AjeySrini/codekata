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
let b=[];
for(let i=0;i<a.length;i++){
    let c=0;
    for(let j=0;j<a.length;j++){
        if(a[i]==a[j]){
            c=c+1;
        }
    }if(c==1){
        b.push(a[i]);
    }
}
if(b.length>0)
  console.log(b.join(" "));
else
console.log("0");

  //end-here
});