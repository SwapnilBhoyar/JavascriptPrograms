const prompt = require('prompt-sync')();

const firstNumber = prompt('Enter first number:');
const secondNumber = prompt('Enter second number:');
const thirdNumber = prompt('Enter third number:');

firstResult = (firstNumber + secondNumber) * thirdNumber;
secondResult = (thirdNumber % firstNumber) + secondNumber;
thirdResult = (thirdNumber + firstNumber) / secondNumber;
fourthResult = (firstNumber * secondNumber) + thirdNumber; 

console.log("Minimum number is:");
if ((firstResult < secondResult) && (firstResult < thirdResult) && (firstResult < fourthResult)) {
    console.log(firstNumber);
} else {
    if ((secondResult < thirdResult) && (secondResult < fourthResult)) {
        console.log(secondResult);
    } else {
        if ((thirdResult < fourthResult)) {
            console.log(thirdResult);
        } else {
            console.log(fourthResult);
        }
    }
}

console.log("Maximum number is:");
if ((firstResult > secondResult) && (firstResult > thirdResult) && (firstResult > fourthResult)) {
    console.log(firstNumber);
} else {
    if ((secondResult > thirdResult) && (secondResult > fourthResult)) {
        console.log(secondResult);
    } else {
        if ((thirdResult > fourthResult)) {
            console.log(thirdResult);
        } else {
            console.log(fourthResult);
        }
    }
}