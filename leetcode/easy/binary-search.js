// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = -1
    if (nums.length === 0) return result

    let low = 0
    let high = nums.length - 1
    let middle = Math.floor((low + high) / 2)
    while (low <= high) {
        if (nums[middle] === target) return middle
        if (nums[middle] > target) {
            high = middle - 1
        } else {
            low = middle + 1
        }
        middle = Math.floor((low + high) / 2)
    }
    return result
};
console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))
console.log(search([-1,0,3,5,9,12], 12))
console.log(search([-1,0,3,5,9,12], -1))
console.log(search([-1,0,3,5,9,12], 5))
console.assert(search([-1,0,3,5,9,12], 9) === 4)
console.assert(search([-1,0,3,5,9,12], 2) === -1)