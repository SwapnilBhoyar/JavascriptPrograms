console.log("Think number Between 1 to 100");
var min = 0;
var max = 100; 

while (min != max) {
    var avg = (min+max)/2;
    const prompt = require('prompt-sync')();
    let number = Number(prompt("If Number is Less than " + avg + " then put 1 and if greater then put 2 else Enter : "));
    if (number == 1)
        max = Math.floor((min+max)/2);
    else if (number == 2)
        min = Math.floor((min+max)/2);
    else{
        min = avg;
        max = avg;
    }
}

console.log("Magic Number is: " + avg);