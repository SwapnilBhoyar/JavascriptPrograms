var arr = [];
for (var i = 0; i <= 10; i++) {
    arr.push(Math.round((Math.random() * 900) + 100));
}
console.log(arr);

function findSecondLargest(arr) {
    const arrSort = arr.sort((a, b) => a - b);
    return arrSort[arr.length - 2];
}
console.log("second largest: " + findSecondLargest(arr))

function findSecondSmallest(arr) {
    const arrSort = arr.sort((a, b) => b - a);
    return arrSort[arr.length - 2];
}
console.log("second smallest:" + findSecondSmallest(arr))