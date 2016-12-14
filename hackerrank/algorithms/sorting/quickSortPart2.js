/*
 All Domains  Algorithms  Sorting Quicksort 2 - Sorting
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };
    var mapIntArray = function (arr) {
        return arr.map(parseInteger);
    };

    var lines = input.split('\n');
    var data = mapIntArray(lines[1].split(' '));
    data = quick(data);
}

function quick(arr) {
    return qsort(arr, 0, arr.length);
}

function qsort(arr, left, right) {
    if ((right - left) < 2) {
        return arr;
    }
    var i, p;
    var less = [], more = [];
    p = arr[left];
    for (var i = left + 1; i < right; i++) {
        if (arr[i] > p) {
            more.push(arr[i]);
        } else {
            less.push(arr[i]);
        }
    }
    less = qsort(less, 0, less.length);
    more = qsort(more, 0, more.length);
    var result = less.concat([p]).concat(more);
    console.log(result.join(' '))
    return result;
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
