/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let str = n + "";
  while (true) {
    const arr = str.split("").map(s => parseInt(s));
    const sum = arr.reduce((acc, cur) => {
      return acc + Math.pow(cur, 2);
    }, 0);
    if (sum === 1) {
      return true;
    } else if (sum < 10 && arr.length !== sum) {
      return false;
    }

    str = sum + "";
  }
};

console.log(isHappy(19)); // true
console.log(isHappy(7)); // true
console.log(isHappy(1111111)); // true
console.log(isHappy(2)); // false
console.log(isHappy(1)); // true
