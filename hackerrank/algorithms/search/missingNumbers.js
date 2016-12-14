/*
 All Domains  Algorithms  Search Missing Numbers
 -- 1번째 시도 : Brute force -> O(N) + {output}log{output}
  - output is 101
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };
    var mapIntArray = function (arr) {
        return arr.map(parseInteger);
    };

    var lines = input.split('\n');
    var N = parseInteger(lines.shift());
    var first = mapIntArray(lines.shift().split(' '));
    var M = parseInteger(lines.shift());
    var second = mapIntArray(lines.shift().split(' '));

    var output = [];
    var frequencyMap = {};

    var i;
    for (i = 0; i < first.length; i++) {
        frequencyMap[first[i]] = frequencyMap[first[i]] ? ++frequencyMap[first[i]] : 1;
    }

    for (i = 0; i < second.length; i++) {
        if (frequencyMap[second[i]] != undefined) {
            frequencyMap[second[i]] = frequencyMap[second[i]] - 1;
        }
    }

    for (var v in frequencyMap) {
        if (frequencyMap[v] != 0) {
            output.push(v);
        }
    }

    output = output.sort();
    console.log(output.join(' '));
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
