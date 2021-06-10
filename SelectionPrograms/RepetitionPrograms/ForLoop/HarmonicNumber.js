const prompt = require('prompt-sync')();
let number = prompt("Enter the value of n to find nth harmonic: ");
number = parseInt(number);

if (n >= 1 && Number.isInteger(n)) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += Math.pow(i, -1);
    }
    console.log("The harmonic number is: " + ans);
} else console.log("Enter only positive integers.");