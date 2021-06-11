const prompt = require('prompt-sync')();
var number = Number(prompt("Enter a number: "));
isprime(number);
var check_palindrome_isPrime = isPalindrome(number);
isprime(check_palindrome_isPrime);


function isprime(number) {
    var flag = 0;
    for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            flag = 1;
        }
    }
    if (flag == 1) {
        console.log(number+" not a prime number ");
    }
    else {
        console.log(number+" is a prime number " );
    }
}

function isPalindrome(number) {
    var rem, temp, palindrome = 0;

    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        palindrome = palindrome * 10 + rem;
    }
    if (palindrome == temp) {
        console.log(palindrome+" Number is Palindrome");
        return palindrome;
    }
    else {
        console.log(palindrome+" Number is not palindrome");
        return palindrome;
    }
}