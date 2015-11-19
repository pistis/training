/*
 All Domains  Algorithms  Warmup  Plus Minus
 */
function processData(input) {
    //Enter your code here
    var param = input.split('\n');

    var n = parseInt(param[0], 10);
    var arr = param[1].split(" ").map(function(a) {return parseInt(a, 10);});

    var positive = 0;
    var negative = 0;
    var zeroes = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] < 0) {
            negative++;
        } else if (arr[i] > 0) {
            positive++;
        } else if (arr[i] == 0){
            zeroes++;
        }
    }
    console.log((positive / n).toFixed(3));
    console.log((negative / n).toFixed(3));
    console.log((zeroes / n).toFixed(3));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
