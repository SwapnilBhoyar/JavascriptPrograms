const prompt = require('prompt-sync')();
let number = prompt("Enter the value for n: ");
number = parseInt(number);

for (index = 2; index <= number; index++) {
    if (number % index == 0) {
        var flag = 0;
        for (innerIndex = 2; innerIndex * innerIndex <= index; innerIndex++) {
            if (index % innerIndex == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log(index);
        }
    }
}