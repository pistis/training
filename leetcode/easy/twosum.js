// https://leetcode.com/problems/two-sum/
/**
 * time complexity : O(n2), brute force
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.assert(twoSum([2, 7, 11, 15], 9).toString() === [0, 1].toString());

// solution
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }
  throw new Error("No two sum solution");
};
