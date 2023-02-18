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
function filt(p,c){
    if(!p.includes(c)){
        return [...p,c];
    }else
    return p; 
}
let c=[];
let b=a.reduce(filt,c);
console.log(b.join(" "));


});