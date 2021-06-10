const prompt = require('prompt-sync')();
let number = prompt("Enter the value for n: ");
number = parseInt(number);

flag = 0;
for (index = 2; index < number; index++) {
    if (number % index == 0) {
        flag = 1;
        break;
    }
}
if (flag == 0)
    console.log(number + " is a prime number");
else
    console.log(number + " is not a prime number");