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
let a=userInput[0].split('');

let b=+userInput[1];

let c=+userInput[2];
let e=+userInput[2];

let d=[];
c=c+1;
for(let i=0;i<a.length;i++){
  
if(c==i){
    c=c+e;
if(b==1){
d.push(a[i].toLowerCase());    

}else if(b==2)
d.push(a[i].toUpperCase()); 
}else if(c!=i)
d.push(a[i]);
 
}
  console.log(d.join(""));

  //end-here
});