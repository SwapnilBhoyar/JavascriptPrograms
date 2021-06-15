var arr = [0, -1, 2, 3, -3, 1]
console.log(arr);

function sumOfThreeInteger(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                {
                    console.log(arr[i]);
                    console.log(" ");
                    console.log(arr[j]);
                    console.log(" ");
                    console.log(arr[k]);
                    console.log()
                }
            }
        }
    
    }
}
sumOfThreeInteger(arr);