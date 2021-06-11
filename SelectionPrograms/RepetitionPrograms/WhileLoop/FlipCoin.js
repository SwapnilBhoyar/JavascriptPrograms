heads = 0;
tails = 0;

while ((heads != 11) & (tails != 11)) {
    coinFlip = Math.floor(Math.random() * 10 % 2);

    if (coinFlip == 1)
        heads++;
    else
        tails++;
}

console.log("Heads = " + heads + ", Tails = " + tails);
console.log(((heads == 11) ? "Heads Win" : "Tails Win"));