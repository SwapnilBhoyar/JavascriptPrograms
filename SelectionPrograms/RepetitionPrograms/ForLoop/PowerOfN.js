var prompt = require('prompt-sync')();
let number = prompt("Enter the value for n: ");
number = parseInt(number);
for(var i = 0; i <= number; i++){
    console.log("2^" + i + " = " + Math.pow(2, i));
}