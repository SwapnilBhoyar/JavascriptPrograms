const prompt = require('prompt-sync')();

const year = prompt('Enter Year:');
if ( (year % 400) == 0) {
    console.log("Leap Year");
} else {
    if ( (year % 100) == 0) {
        console.log("Not a leap year");
    } else {
        if ((year % 4) == 0) {
            console.log ("Leap year");
        } else {
            console.log("Not a leap year");
        }
    }
}