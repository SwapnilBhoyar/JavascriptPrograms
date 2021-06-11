const prompt = require('prompt-sync')();
let startNumber = Number(prompt("Enter the start value: "));
let endNumber = Number(prompt("Enter the end value: "));

for (index = startNumber; index < endNumber; index++) {

    if (index == 1 || index == 0) 
        continue;
    flag = 1;

    for (let innerIndex = 2; innerIndex < index / 2; innerIndex++) {
        if (index % innerIndex == 0) {
            flag = 0;
            break;
        }
    }

    if (flag == 1)
        console.log(index);
}