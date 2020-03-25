// https://leetcode.com/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(num1, num2) {
  const len = num1.length > num2.length ? num1.length : num2.length;
  let num1Len = num1.length;
  let num2Len = num2.length;
  let n1 = (n2 = sum = carry = unit = 0);
  let output = [];

  for (let c = len - 1; c >= 0; c--) {
    n1 = num1Len ? parseInt(num1[--num1Len]) : 0;
    n2 = num2Len ? parseInt(num2[--num2Len]) : 0;
    sum = carry + n1 + n2;
    carry = parseInt(sum / 2);
    unit = sum % 2;
    output.push(unit);
  }
  if (carry) {
    output.push(carry);
  }
  return output.reverse().join("");
};

console.log(addBinary("11", "1"));
