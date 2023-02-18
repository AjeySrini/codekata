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
let a=userInput[0].split(" ");

let b=[];

let c=a.length;
for(let i=0;i<a.length;i++){
  let d=0;
 

    if(a[i]==a[i+1]||a[i]==a[i-1]){
     
      b.push(a[i]);
      d=1;
      
      
    
    
  }
 

}
for(let i=0;a.length>i;i++){
    for(let j=0;b.length>j;j++){
    a.splice(a.indexOf(b[j]),1);
    }
}

console.log(a.join(" "));


});