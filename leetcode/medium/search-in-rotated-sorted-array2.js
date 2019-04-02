// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
/**
 * time complexity O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return false

  let low = 0
  let high = nums.length - 1
  let mid

  while(low <= high) {
    mid = Math.floor((low + high) / 2)

    if (nums[mid] === target)
      return true
    else {
      while (nums[low] === nums[mid] && low < mid) {
        low++
      }
      while (nums[mid] === nums[high] && mid < high) {
        high--
      }
      if ((nums[low] <= target && target < nums[mid]) ||
        (nums[low] > nums[mid] && (nums[low] <= target || target < nums[mid]))) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
  }
  return false
};

console.assert(search([4,5,6,7,0,1,2], 0) === true)
console.assert(search([4,5,6,7,0,1,2], -1) === false)