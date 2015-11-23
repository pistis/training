/**
 * imlementation test
 */

function processData() {
    var arr = [2, 3, 10, 2, 4, 8, 1];

    var arr = [7, 9, 5, 6, 3, 2];
    var min = arr[0];
    var max = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        var diff = arr[i] - min;
        if (diff > max) {
            max = diff;
        }
    }

    console.log(max || -1);
}
