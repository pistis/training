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
    var s = readLine(), len = s.length - 1, i, startAt = 65, endAt = 90, wordCnt = 1, charAt;
    for (i = 1; i < len; i++) {
        charAt = s[i].charCodeAt();
        if (startAt <= charAt && charAt <= endAt) {
            wordCnt++;
            i++;
        }
    }
    console.log(wordCnt);
}

/**
 * https://www.hackerrank.com/challenges/camelcase
 * input : saveChangesInTheEditor
 * output : 5
 */