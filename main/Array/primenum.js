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
    let a=userInput[0].split(" ").map(i=>parseInt(i));
    console.log(a);
    let b=[];
    for(let i=0;i<a.length;i++){
let c=0;
if(a[i]==a[i].reverse()){
    b.push(a[i]);
    continue;
}
        for(let j=2;j<a[i];j++){
            if(a[i]%j==0){
                c=c+1;
            }
        }
        if(c==0){
            b.push(a[i]);
        }
    }
    console.log(b);

});