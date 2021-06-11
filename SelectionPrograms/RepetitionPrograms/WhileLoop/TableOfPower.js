const prompt = require('prompt-sync')();
let number = prompt("Enter the value for n: ");
number = parseInt(number);

power = 0;
index = 0;

while ((power < 256) & (index <= number)) {
    power = Math.pow(2, index);
    console.log(power);
    index++;
}