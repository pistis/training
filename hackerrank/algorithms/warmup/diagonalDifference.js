/*
 All Domains  Algorithms  Warmup  Diagonal Difference
 */

function processData(input) {
    //Enter your code here
    var param = input.split('\n');

    var n = param[0];
    var arr = new Array(n);
    for (var i = 0; i < n; i++) {
        arr[i] = param[i + 1].split(" ").map(function(a) {return parseInt(a, 10);});
    }

    var left = right = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        left += arr[i][i];
        right += arr[i][len - i - 1];
    }

    console.log(Math.abs(left - right));
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
