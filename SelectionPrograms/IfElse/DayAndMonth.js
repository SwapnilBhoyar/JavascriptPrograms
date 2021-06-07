const prompt = require('prompt-sync')();

const day = prompt('Enter Day:');
const Month = prompt('Enter Month:');

if ( (day >= 20 && day <= 31) && (Month >= 3 && Month <= 6) ) {
    console.log("True");
} else {
    console.log("False");
}