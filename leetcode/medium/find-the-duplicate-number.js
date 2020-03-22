/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let duplicated = null;
  for (let i = 0; i < nums.length; i++) {
    const base = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (base === nums[j]) {
        duplicated = nums[j];
        break;
      }
    }

    if (duplicated) {
      break;
    }
  }
  return duplicated;
};
console.assert(findDuplicate([3, 1, 3, 4, 2]) === 3);
console.assert(findDuplicate([1, 3, 4, 2, 2]) === 2);
