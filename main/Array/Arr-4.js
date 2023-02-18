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

let c=a.length;
for(let i=0;i<a.length;i++){
  
  for(let j=i+1;j<=c;j++){

    if(a[i]==a[j]){
     
      b.push(a[j]);
     
      
      break;
    }
    
  }
 

}
console.log(b.join(" "));


});