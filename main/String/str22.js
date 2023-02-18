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
let a= +userInput[0];
let b=[];
for(let i=1;i<=a;i++){
    b.push(userInput[i]);
}
let positive=false;
for(let i=0;i<b.length;i++){
    let a=b[i].split(" ").reverse().join(" ");
    for(let j=0;j<b.length;j++){
        if(a==b[j]){
            positive=true;
        }
    }
    if(positive){
        break;
    } 
}
if(positive)
  console.log("YES");
else
console.log("NO");
  //end-here
});