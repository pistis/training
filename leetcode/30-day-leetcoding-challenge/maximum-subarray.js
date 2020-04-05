// https://leetcode.com/problems/maximum-subarray/
/**
 * Runtime: 60 ms, faster than 69.56% of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 35.1 MB, less than 87.04% of JavaScript online submissions for Maximum Subarray.
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(sum, max);
    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};

console.assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
