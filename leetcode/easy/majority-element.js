/**
 * https://leetcode.com/problems/majority-element
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });

  const limit = nums.length / 2;
  let prev = null;
  let cnt = 1;
  for (let i = 0; i < nums.length; i++) {
    if (prev === nums[i]) {
      cnt++;
      if (cnt > limit) {
        return nums[i];
      }
    } else {
      prev = nums[i];
      cnt = 1;
    }
  }

  return nums[0];
};
