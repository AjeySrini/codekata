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
let mid=[];
if(a.length%2!=0)
 mid.push((((a.length)/2)-1).toFixed(0));
else{
mid.push(((a.length-1)/2).toFixed(0));
mid.push(((a.length-2)/2).toFixed(0));
}
if(a.length==1)
a[0]="*";
else
for(let i=0;i<mid.length;i++){
    let v=mid[i];
a[v]="*";
}
console.log(a.join(""));

  //end-here
});