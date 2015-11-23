/*
 All Domains  Algorithms  Implementation Cavity Map
 */
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var mapIntArray = function (arr) {
        return arr.map(function(a) { return parseInt(a, 10);});
    };
    var N = parseInt(readLine());
    var grid = [];
    for(var i = 0; i < N; i++){
        grid.push(mapIntArray(readLine().split('')));
    }

    var i, j, v;
    var cavity = [];
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            v = grid[i][j];
            if (isEdge(i, j, N)) {
                continue;
            }
            if (isCavity(grid, i, j, N)) {
                cavity.push([i, j]);
            }
        }
    }

    for (i = 0; i < cavity.length; i++) {
        var cav = cavity[i];
        grid[cav[0]][cav[1]] = 'X';
    }

    for (i = 0; i < N; i++) {
        console.log(grid[i].join(''));
    }

}

function isEdge(i, j, N) {
    return (0 == i || i == N - 1) || (0 == j || j == N - 1);
}
function isCavity(arr, i, j, N) {
    var getEdgeValue = function(i, j) {
        if (0 <= i && i < N && 0 <= j && j < N) {
            return arr[i][j];
        } else {
            return 0;
        }
    }
    var v = arr[i][j];
    var t = getEdgeValue(i - 1, j);
    var b = getEdgeValue(i + 1, j);
    var l = getEdgeValue(i, j - 1);
    var r = getEdgeValue(i, j + 1);
    if (v > t && v > b && v > l && v > r) {
        return true;
    } else {
        return false;
    }
};