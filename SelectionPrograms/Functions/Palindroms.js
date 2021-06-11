const prompt = require('prompt-sync')();

function checkPalindrome() {
    var rem, temp, palindrome = 0;
    var firstNumber = Number(prompt("enter the first number : "));
    var secondNumber = Number(prompt("enter the second number : "));


    temp = firstNumber;
    while (firstNumber > 0) {
        rem = firstNumber % 10;
        firstNumber = parseInt(firstNumber / 10);
        palindrome = palindrome * 10 + rem;
    }
    if (palindrome == secondNumber) {
        console.log("two numbers are Palindrome");
    }
    else {
        console.log("two numbers are not palindrome");
    }
}

checkPalindrome();