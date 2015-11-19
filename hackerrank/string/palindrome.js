/*
 All Domains  Algorithms  Strings  Palindrome Index
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var T = parseInteger(lines.shift());

    for (var k = 0; k < T; k++) {
        var strs = lines[k].split('');
        var index = -1;
        if (strs.length < 2) {
            console.log(-1);
            continue;
        }

        for (var i = 0, j = strs.length - 1; i < j; i++, j--) {
            if (strs[i] != strs[j]) {
                if (isPalindrome(strs.slice(i, j))) {
                    index = j;
                    break;
                }
                if (isPalindrome(strs.slice(i + 1, j + 1))) {
                    index = i;
                    break;
                }
            }
        }

        console.log(index);
    }
}

function isPalindrome(strs) {
    for (var i = 0, j = strs.length - 1; i < j; i++, j--) {
        if (strs[i] != strs[j]) {
            return false;
        }
    }
    return true;
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
