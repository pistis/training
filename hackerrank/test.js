function test() {
    var arr = range(1, 100);
    var arr = [-7, -3, -2, 5, 8];
    var count = 0;
    var res = 0;
    for(var i = 0; i < arr.length; i++) {
       for(var j = i + 1; j < arr.length; j++) {
           for(var k = j + 1; k < arr.length; k++) {
               count++;
               if (arr[i] + arr[j] + arr[k] == 0) {
                   res++;
               }
           }
       }
    }
    console.log(count, res);
}
function test2() {
    var arr = [-45,22,42,-16,-41,-27,56,30,-36,53,-37,77,-36,30,-75,-46,26,-38,-10,62,-32,-54,-6,45];
    console.log(arr.length);
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            for(var k = j + 1; k < arr.length; k++) {
                count++;
            }
        }
    }
    console.log(count);
}
function fac(n) {
    var f = 1;
    for (var i = 1; i <=n; i++) {
        f *= i;
    }
    return f;
}

function range(start, end) {
    var arr = [];
    for(var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

console.log('10개의 정수 배열에서 3가지 숫자로 조합하는 경우의 수', fac(10) / (fac(7) * fac(3)));
console.log('포커게임에서 5장씩 받았을때의 조합되는 경우의 수', fac(52) / (fac(47) * fac(5)));
console.log('포커게임에서 4장씩 받았을때의 조합되는 경우의 수', fac(52) / (fac(48) * fac(4)));
