/*
 All Domains  Algorithms  Warmup  Simple Array Sum
 */

function processData(input) {
    //Enter your code here
    var arr = input.split('\n')[1].split(' ');
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i], 10);
    }
    console.log(sum);
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
