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
  let d=0;
  for(let j=i;j<=c;j++){

    if(a[i]>a[j]){
     
      b.push(a[j]);
      d=1;
      
      break;
    }
    
  }if(d==0){
    
    b.push("-1");
  }
 

}
console.log(b.join(" "));


});