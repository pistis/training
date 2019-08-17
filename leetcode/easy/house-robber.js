// https://leetcode.com/problems/house-robber/
/**
 * time complexity : O(n)
 * space complexity : O(n) (n * 2 + 1)
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;

  let adjacentHouseOne = 0;
  let adjacentHouseTwo = 0;
  let robbedMoney = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i];
    adjacentHouseOne = nums[i - 3] || 0;
    adjacentHouseTwo = nums[i - 2] || 0;
    nums[i] += Math.max(adjacentHouseOne, adjacentHouseTwo);

    if (robbedMoney < nums[i]) {
      robbedMoney = nums[i];
    }
  }

  return robbedMoney;
};

console.assert(rob([1, 2, 3, 1]) === 4);
console.assert(rob([2, 7, 9, 3, 1]) === 12);
console.assert(rob([1, 10, 2]) === 10);
console.assert(rob([1, 10, 9, 2]) === 12);
