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

let b=userInput[3].split(" ").map(i=>parseInt(i));

let c=[];
for(let i=0;i<b.length;i++){
    let d=0;
    for(let j=0;j<a.length;j++){
        if(b[i]==a[j]){
            d=d+1;
        }

    }
    if(d<=0){
        c.push("Not Present");
    }else{
    c.push(d);
    }
}
  console.log(c.join(" "));

  //end-here
});