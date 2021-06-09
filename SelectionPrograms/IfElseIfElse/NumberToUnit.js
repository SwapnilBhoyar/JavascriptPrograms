const prompt = require('prompt-sync')();

const number = prompt('Enter Number:');
if (number == 1) {
    console.log("one");
} else {
    if (number == 100) {
        console.log("Hundred");
    } else {
        if (number == 1000) {
            console.log("Thousand");
        } else {
            if (number == 10000) {
                console.log("Ten Thousand");
            } else {
                    console.log("Number not acceptable");
                }
            }
        }
    }