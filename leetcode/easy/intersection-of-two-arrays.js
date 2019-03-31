// https://leetcode.com/problems/intersection-of-two-arrays/submissions/
/**
 * time complexity : O(n)
 * space complexity : O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = []
    const intersection = {}
    let len = nums1.length
    let arr = nums1
    for (let i = 0; i < len; i++) {
        intersection[arr[i]] = true
    }

    len = nums2.length
    for (let i = 0; i < len; i++) {
        if (intersection[nums2[i]]) {
            result.push(nums2[i])
            delete intersection[nums2[i]]
        }
    }

    return result
};

console.assert(intersection([4,9,5], [9,4,9,8,4]).toString(), [9, 4].toString())