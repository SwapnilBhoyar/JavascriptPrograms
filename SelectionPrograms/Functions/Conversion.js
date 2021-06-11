const prompt = require('prompt-sync')();

function Conversion() {
    console.log("choice Conversion \n1] Celsius to Fahrenheit \n2] Fahrenheit to Celsius");
    var choice = Number(prompt("enter your choice "));
    switch (choice) {
        case 1:
            console.log("\nCelsius to fahrenheit ");
            var degc = Number(prompt("Enter Degree in Celsius= "));
            degf = ((degc * 9 / 5) + 32);
            console.log(degf + " Faherenhiet");
            break;
        case 2:
            console.log("\nFahrenheit to Celsius")
            var degf = Number(prompt("Degree in fahrenheit= "));
            degc = ((degf - 32) * 5 / 9)
            console.log(degc + " Celsius");
            break;
        default:
            console.log("inavalid choice");

    }
}

Conversion();