// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// point : 1이 연속일때의 처리

function solution(N) {
    const binary = N.toString(2);
    let gap = 0;
    let count = 0;
    let flag = false;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            if (flag) {
                if (gap < count) gap = count;
                count = 0;
            } else {
                flag = true;
            }
        } else {
            if (flag) {
                count++;
            }
        }
    }
    return gap;
}

// test cases
console.assert(solution(1041) === 5);
console.assert(solution(15) === 0);
console.assert(solution(32) === 0);
console.assert(solution(6) === 0);
console.assert(solution(328) === 2);
console.assert(solution(1162) === 3);
console.assert(solution(5) === 1);
console.assert(solution(51712) === 2);
console.assert(solution(20) === 1);

// 1041 => 10000010001 => 5
// 15 => 1111 => 0
// 32 => 100000 => 0
// 6 => 110 => 0
// 328 => 101001000 => 2
// 1162 => 10010001010 => 3
// 51712 => 110010100000000 => 2
// 20 => 10100 => 1