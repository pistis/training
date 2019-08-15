// https://leetcode.com/problems/house-robber/
/**
 * time complexity : O(n)
 * space complexity : O(n) (n * 2 + 1)
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;

  let candidateFirst = 0;
  let candidateSecond = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    candidateFirst = nums[i - 3] || 0;
    candidateSecond = nums[i - 2] || 0;
    current += Math.max(candidateFirst, candidateSecond);
    nums[i] = current;
    if (max < nums[i]) {
      max = nums[i];
    }
  }

  return max;
};
console.assert(addStrings("0", "0").toString() === "0".toString());
console.assert(addStrings("123", "12").toString() === "135".toString());
