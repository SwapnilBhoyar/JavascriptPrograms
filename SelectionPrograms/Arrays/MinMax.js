var arr = [];
for (var i = 0; i <= 10; i++) {
    arr.push(Math.round((Math.random() * 900) + 100));
}
console.log(arr);

var max = Math.max.apply(null, arr);
var secondmax = Math.max.apply(null, arr.filter(number => number != max));
console.log('Second Largest  ' + secondmax);

var min = Math.min.apply(null, arr);
var secondmin = Math.min.apply(null, arr.filter(number => number != min));
console.log('Second smallest: ' + secondmin);