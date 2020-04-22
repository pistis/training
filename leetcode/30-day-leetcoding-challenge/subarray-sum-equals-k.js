/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let sum = [];
  sum[0] = 0;

  for (let i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }
  for (let s = 0; s < nums.length; s++) {
    for (let e = s + 1; e <= nums.length; e++) {
      if (sum[e] - sum[s] === k) {
        count++;
      }
    }
  }
  return count;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1], 1)); // 1
console.log(subarraySum([-1, -1, 1], 0)); // 1
