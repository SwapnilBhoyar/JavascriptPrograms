let firstNumber = Math.floor( Math.random() * ( 999 - 100 + 1 ) + 100 );
let secondNumber = Math.floor( Math.random() * ( 999 - 100 + 1) + 100 );
let thirdNumber = Math.floor( Math.random() * ( 999 - 100 + 1 ) + 100 );
let fourthNumber = Math.floor( Math.random() * ( 999 - 100 + 1 ) + 100 );
let fifthNumber = Math.floor( Math.random() * ( 999 - 100 + 1) + 100 );

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(fourthNumber);
console.log(fifthNumber);

console.log("Minimum number is:");
if ( (fifthNumber < secondNumber ) && (firstNumber < thirdNumber ) && (firstNumber < fourthNumber) && (firstNumber < fifthNumber)) {
    console.log(firstNumber);
} else {
    if ( (secondNumber < thirdNumber ) && (secondNumber < fourthNumber) && (secondNumber < fifthNumber)) {
        console.log(secondNumber);
    } else {
        if ( (thirdNumber < fourthNumber) && (thirdNumber < fifthNumber) ) {
            console.log(thirdNumber);
        } else {
            if(fourthNumber < fifthNumber) {
                console.log(fourthNumber);
            } else {
                console.log(fifthNumber);
            }
        }
    }
}

console.log("Maximim number is:")
if ( (fifthNumber > secondNumber ) && (firstNumber > thirdNumber ) && (firstNumber > fourthNumber) && (firstNumber > fifthNumber)) {
    console.log(firstNumber);
} else {
    if ( (secondNumber > thirdNumber ) && (secondNumber > fourthNumber) && (secondNumber > fifthNumber)) {
        console.log(secondNumber);
    } else {
        if ( (thirdNumber > fourthNumber) && (thirdNumber > fifthNumber) ) {
            console.log(thirdNumber);
        } else {
            if(fourthNumber > fifthNumber) {
                console.log(fourthNumber);
            } else {
                console.log(fifthNumber);
            }
        }
    }
}