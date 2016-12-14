function processData(input) {
    var lines = input.split('\n');
    var a = lines[0], b = lines[1];
    var count = 0;
    var aLen = a.length;
    var bLen = b.length;

    var initializeMap= function() {
        var chars = {};
        for(var i = 97; i <= 122; i++) {
            chars[String.fromCharCode(i)] = 0;
        }
        return chars;
    };
    var aChar = initializeMap();
    var bChar = initializeMap();

    for(var i = 0; i < aLen; i++) {
        aChar[a[i]]++;
    }

    for(i = 0; i < bLen; i++) {
        bChar[b[i]]++;
    }

    for (i in aChar) {
        count += Math.abs(aChar[i] - bChar[i]);
    }

    console.log(count);
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



/**
 * https://www.hackerrank.com/challenges/making-anagrams
 * input :
 * - cde
 * - abc
 * output : 4
 */

/**
 * 규칙
 * - 알파벳 소문자로 이루어짐
 * - 1~10^4사이의 길이
 * -
 */