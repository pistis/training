/*
 All Domains  Algorithms  Implementation Sherlock and Array
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };
    var mapIntArray = function (arr) {
        return arr.map(parseInteger);
    };

    var lines = input.split('\n');
    var T = parseInteger(lines.shift());
    var i, j;
    for (i = 0; i < T; i++) {
        var N = parseInteger(lines.shift());
        var arr = mapIntArray(lines.shift().split(' '));
        console.log(isSherlockArray(N, arr) ? 'YES' : 'NO');
    }
}

function isSherlockArray(N, arr) {
    var left = [];
    var right = [];
    left[0] = 0;
    right[N - 1] = 0;

    for (i = 1, j = N - 2; i < N, j >= 0; i++, j--) {
        left[i] = left[i - 1] + arr[i - 1];
        right[j] = right[j + 1] + arr[j + 1];
    }

    for (i = 0; i < N; i++) {
        if (left[i] == right[i]) {
            return true;
        }
    }

    return false;
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