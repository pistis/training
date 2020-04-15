/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let productExceptZero = 1;
  let product = 1;
  let zeroCount = 0;
  nums.forEach((num, i) => {
    if (num === 0) {
      zeroCount++;
    }
    if (num !== 0) {
      productExceptZero *= num;
    }
    product *= num;
  });

  return nums.map((num) => {
    if (zeroCount > 1) {
      return 0;
    } else if (zeroCount === 1) {
      return num === 0 ? productExceptZero : 0;
    } else {
      return product / num;
    }
  });
};
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([0, 0]));
console.log(productExceptSelf([1, 0]));
console.log(productExceptSelf([0, 1]));
