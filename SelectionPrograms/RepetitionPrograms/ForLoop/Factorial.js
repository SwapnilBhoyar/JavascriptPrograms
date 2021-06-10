const prompt = require('prompt-sync')();
let number = Number(prompt("Enter the value for n: "));

var factorial = 1;

for (index = 1; index <= number; index++) {
    factorial = factorial * index;    
}
console.log("Factorial of " + number + " " + "is " + factorial);