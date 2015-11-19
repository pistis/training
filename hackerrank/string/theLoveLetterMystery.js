/*
 All Domains  Algorithms  Strings  The Love-Letter Mystery
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var T = parseInteger(lines.shift());

    for (var i = 0; i < T; i++) {
        var count = 0;
        var strs = lines[i].split('');
        var len = strs.length / 2;
        for (var j = 0; j < len; j++) {
            count += Math.abs(strs[j].charCodeAt(0) - strs[strs.length - j - 1].charCodeAt(0));
        }
        console.log(count);
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
