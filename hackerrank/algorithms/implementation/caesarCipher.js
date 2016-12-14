/*
 All Domains  Algorithms  Implementation CaesarCipher
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
    var N = parseInt(readLine());
    var str = readLine();
    var K = parseInt(readLine());
    var result = '';
    for (var i = 0; i < N; i++) {
        var ascii = str.charCodeAt(i);
        if (96 < ascii && ascii < 123) {
            ascii = (((ascii + K) - 97) % 26) + 97;
        } else if (64 < ascii && ascii < 91) {
            ascii = (((ascii + K) - 65) % 26) + 65;
        }

        result += String.fromCharCode(ascii);
    }
    console.log(result);
}