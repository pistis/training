/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const min = -2147483648;
  const max = 2147483647;
  let str = String(x);
  let positive = str.indexOf("-") === -1;
  if (!positive) {
    str = str.substring(1);
  }
  let reversed = parseInt(str.split("").reverse().join(""));

  if (!positive) {
    reversed *= -1;
  }

  return reversed < min || reversed > max ? 0 : reversed;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); //21
