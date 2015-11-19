/*
 All Domains  Algorithms  Sorting Insertion Sort - Part 2
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };
    var mapIntArray = function (arr) {
        return arr.map(function(a) {return parseInt(a, 10);});;
    };

    var lines = input.split('\n');
    var size = parseInteger(lines.shift());
    var data = lines.shift().split(' ').map(parseInteger);

    for (var i = 1; i < size; i++) {
        var j = i;
        var tmp = data[j];
        while(j > 0 && data[j - 1] > tmp) {
            data[j] = data[j - 1];
            j--;
        }
        data[j] = tmp;
        console.log(data.join(' '));
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
