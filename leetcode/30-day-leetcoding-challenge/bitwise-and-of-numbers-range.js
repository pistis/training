/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  while (n > m) {
    n &= n - 1;
  }
  return n;
};

console.log(rangeBitwiseAnd(5, 7)); // 4
console.log(rangeBitwiseAnd(0, 1)); // 0
console.log(rangeBitwiseAnd(0, 2147483647)); // 0
