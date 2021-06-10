const prompt = require('prompt-sync')();

console.log("1.Feet to inch \n2.Feet to meter \n3.Inch to feet \n4.Meter to feet");
let number = prompt("Enter a number:");
number = Number(number);
switch (number) {
    case 1:
        var input = prompt("Enter feet value:");
        var conversionResult = input * 12;
        console.log(conversionResult + " inch");
        break;
    case 2:
        input = prompt("Enter feet value:");
        conversionResult = input / 3.2808;
        console.log(conversionResult + " meters");
        break;
    case 3:
        input = prompt("Enter inch value:");
        conversionResult = input / 12;
        console.log(conversionResult + " feet");
        break;
    case 4:
        input = prompt("Enter feet value:");
        conversionResult = input * 3.2808;
        console.log(conversionResult + " feet");
        break;
    default:
        console.log("Invalid number");
}