// https://leetcode.com/problems/search-in-rotated-sorted-array
// first solution
var searchPivot = function(nums) {  // important point
    if (nums.length === 1) return 0
    if (nums.length === 2) return nums[0] > nums[1] ? 1 : 0

    let low = 0
    let high = nums.length - 1
    let mid = Math.floor((low + high) / 2)

    while(low + 1 !== high) {
        if(nums[low] > nums[mid]) { // 왼쪽에서 pivot 찾기
            high = mid
            mid = Math.floor((low + high) / 2)
        } else if (nums[mid] > nums[high]) {    // 오른쪽에서 pivot 찾기
            low = mid
            mid = Math.floor((low + high) / 2)
        } else {
            // 정렬되어 있는 상태이므로 pivot은 0
            return 0
        }
    }

    return high
};

/**
 * time complexity O(2 log n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivot = searchPivot(nums)

    let len = nums.length
    let low = 0
    let high = nums.length - 1
    let mid, realMid

    while(low <= high) {
        mid = Math.floor((low + high) / 2)
        realMid = (mid + pivot) % len   // important point

        if (nums[realMid] === target)
            return realMid
        else if (nums[realMid] > target)
            high = mid - 1
        else
            low = mid + 1
    }
    return -1
};


// second solution
/**
 * time complexity O(log n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1

  let low = 0
  let high = nums.length - 1
  let mid

  while(low <= high) {
    mid = Math.floor((low + high) / 2)

    if (nums[mid] === target)
      return mid
    else if ((nums[low] <= target && target < nums[mid]) ||
      (nums[low] > nums[mid] && (nums[low] <= target || target < nums[mid])))
      high = mid - 1
    else
      low = mid + 1
  }
  return -1
};

console.assert(search([4,5,6,7,0,1,2], 0) === 4)