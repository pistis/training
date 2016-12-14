/*
 All Domains  Algorithms  Warmup  Time Conversion
 */
function processData(input) {
    //Enter your code here
    var param = input.split('\n');
    var time = param[0];

    var re = /(\d+):(\d+):(\d+)(AM|PM)/gi;
    if (re.test(time)) {
        var hours = RegExp.$1;
        var minutes = RegExp.$2;
        var seconds = RegExp.$3;
        var isPM = RegExp.$4 == 'PM';

        if (isPM && hours != '12') {
            hours = parseInt(hours, 10) + 12;
        } else if (!isPM && hours == 12) {
            hours = '00';
        }
        console.log(hours + ':' + minutes + ':' + seconds);
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
