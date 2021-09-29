/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 1; i <= nums.length; i++) {
    sum += i;
  }

  return (
    sum -
    nums.reduce((acc, cur) => {
      return acc + cur;
    }, 0)
  );
};

console.assert(missingNumber([3, 0, 1]) === 2);
console.assert(missingNumber([0, 1]) === 2);
console.assert(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) === 8);
console.assert(missingNumber([0]) === 1);
