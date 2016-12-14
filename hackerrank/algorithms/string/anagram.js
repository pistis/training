/*
 All Domains  Algorithms  Strings  Anagram
 */
// TODO : 진행중...
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var T = parseInteger(lines.shift());

    for (var i = 0; i < T; i++) {
        var count = 0;
        var str = lines[i];
        if (str.length % 2 != 0) {
            count = -1;
        } else {
            var mid = str.length / 2;
            var strs = str.split().sort();

            var l = str.split('').slice(0, mid).sort();
            var r = str.split('').slice(mid, str.length).sort();
            for (var j = 0; j < mid; j++) {
                if (l[j] != r[j]) {
                    count++;
                }
            }
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
