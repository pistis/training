/*
 All Domains  Algorithms  Warmup  Staircase
 */
function processData(input) {
    //Enter your code here
    var param = input.split('\n');

    var n = parseInt(param[0], 10);

    for (var i = 0; i < n; i++) {
        var spaces = new Array(n-i).join(' ');
        var hashes = new Array(2+i).join('#');
        console.log(spaces + hashes);
    }
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
