// https://leetcode.com/problems/non-decreasing-array
/**
 * time complexity : O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if (nums.length === 1) return true
    const len = nums.length - 2

    let modifying = false
    for (let i = 0; i < len; i++) {
        if (nums[i] > nums[i + 1]) {
            if (modifying) return false

            if (nums[i + 2] >= nums[i]) {
                nums[i + 1] = nums[i]
            } else {
                nums[i] = nums[i + 1]
            }
            modifying = true
        }
        if (nums[i + 2] < nums[i + 1] && modifying) return false
        if (nums[i] < nums[i - 1] && modifying) return false
    }
    return true
};

console.assert(checkPossibility([4,2,1]) === false)
console.assert(checkPossibility([4,2,3]) === true)
console.assert(checkPossibility([3,4,2,3]) === false)
console.assert(checkPossibility([2,3,3,2,3]) === true)
console.assert(checkPossibility([1,3,2,5,4]) === false)