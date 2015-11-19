/*
 All Domains  Algorithms  Sorting Quicksort 1 - Partition
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };
    var mapIntArray = function (arr) {
        return arr.map(parseInteger);
    };

    var lines = input.split('\n');
    var size = parseInteger(lines.shift());
    var data = mapIntArray(lines.shift().split(' '));

    var left = 0;
    var right = size;
    var tmp;
    if ((right - left) > 1) {
        var p = data[left];
        var i = left;
        var j = right;

        while(true) {
            while(p > data[++i]);
            while(data[--j] > p);
            if (i >= j) break;
            tmp = data[j];
            data[j] = data[i];
            data[i] = tmp;
        }
        data[left] = data[j];
        data[j] = p;
    }
    console.log(data.join(' '));
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
