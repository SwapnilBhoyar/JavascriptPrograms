var arr = []
var num=1
function repeatTwice() {
    for (var i = 1; i < 100; i++) {
        var repeatnumber = parseInt((num / 10) % 10);
        if ((num % 10) == repeatnumber) {
            arr.push(num)
        }
        num++
    }
    return console.log(arr)
}
repeatTwice();