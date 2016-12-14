/*
 All Domains  Algorithms  Sorting Intro to Tutorial Challenges
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };
    var mapIntArray = function (arr) {
        return arr.map(function(a) {return parseInt(a, 10);});;
    };

    var lines = input.split('\n');
    var v = parseInteger(lines.shift());
    var n = parseInteger(lines.shift());
    var data = lines.shift().split(' ').map(parseInteger);

    for (var i = 0; i < n; i++) {
        if (data[i] == v) {
            console.log(i);
            break;
        }
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
