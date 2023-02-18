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

let sorter=(a,b)=>{
    if(a<b)
    return -1;
    else if(a>b)
    return 1;
    else
    return 0;
}
let b=a.sort(sorter);
  console.log(b.join(" "));

  //end-here
});