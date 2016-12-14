/*
 All Domains  Algorithms  Implementation  Angry Professor
 */
function processData(input) {
    var param = input.split('\n');
    var t = parseInt(param[0], 10);

    for (var i = 0; i < t; i++) {
        var nkArr = mapIntArray(param[i * 2 + 1].split(' '));
        var n = nkArr[0];
        var k = nkArr[1];

        var arrivalArr = mapIntArray(param[i * 2 + 2].split(' '));
        for (var j = 0; j < arrivalArr.length; j++) {
            if (arrivalArr[j] <= 0) {
                k--;
            }
            if (k == 0) {
                break;
            }
        }
        if (k == 0) {
            console.log('NO');
        } else {
            console.log('YES');
        }
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
