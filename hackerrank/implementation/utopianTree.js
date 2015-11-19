/*
 All Domains  Algorithms  Implementation  Utopian Tree
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var T = parseInteger(lines.shift());

    var data = lines.splice(0, T).map(parseInteger);

    for (var i = 0; i < T; i++) {
        var bSpring = true;
        var tree;
        var cycle = data[i];

        if (cycle == 0) {
            tree = 1;
        } else if (cycle % 2 == 0) {
            tree = Math.pow(2, ((cycle / 2) + 1)) - 1;
        } else if (cycle % 2 == 1) {
            tree = Math.pow(2, ((cycle + 3) / 2)) - 2;
        }

        console.log(tree);
    }
}

function mapIntArray(arr) {
    return arr.map(function(a) {return parseInt(a, 10);});;
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
