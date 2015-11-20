/*
 All Domains  Algorithms  Search Pairs
 -- 1번째 시도 : Brute force -> O(N2)
 -- 2번째 시도 : sort to reverse array & remove Math.abs -> O(N2)
 -- 3번째 시도 : diff가 K인 값을 array에서 search -> O(NlogN)
 -- 4번째 시도 : diff가 K인 값을 검색하지 않고 map에 상태 플래그를 관리한 후
               루프를 돌떄마다 처음에 map에 해당 데이타가 있는지 검사하여 count -> O(N)
 */
function processData(input) {
    var parseInteger = function (s) { return parseInt(s, 10); };
    var mapIntArray = function (arr) {
        return arr.map(parseInteger);
    };

    var lines = input.split('\n');
    var nk = mapIntArray(lines.shift().split(' '));
    var K = nk[1];
    var data = mapIntArray(lines.shift().split(' '));

    var count = 0;
    var keyMap = {};
    data = data.sort(function(a, b) { return b - a;});
    for (var i = 0; i < data.length; i++) {
        if (keyMap[data[i]]) {
            count++;
        }
        keyMap[data[i] - K] = true;
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
