/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    carry = parseInt(sum / 10);
    digits[i] = carry ? sum % 10 : sum;
  }
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
};

console.assert(plusOne([1, 2, 3]).toString() === [1, 2, 4].toString());
console.assert(plusOne([4, 3, 2, 1]).toString() === [4, 3, 2, 2].toString());
console.assert(plusOne([0]).toString() === [1].toString());
console.assert(plusOne([9]).toString() === [1, 0].toString());
