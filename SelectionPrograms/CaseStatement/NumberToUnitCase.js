const prompt = require('prompt-sync')();

let number = prompt("Enter a number:");
number = Number(number);
switch (number) {
    case 1:
        console.log("one");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    default:
        console.log("Invalid number");
}