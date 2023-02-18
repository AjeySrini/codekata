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

let b=[];

let c=a.length;
for(let i=0;i<a.length;i++){
  let d=0;
  for(let j=0;j<=c;j++){

    if(a[i]==a[j]){
           d=d+1;
      
      
    }
    
  }if(d==1){
    
    b.push(a[i]);
  }
 

}
console.log(b.join(""));


});