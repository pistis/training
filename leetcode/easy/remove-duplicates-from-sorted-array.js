// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/1046131/Solve-Problem-is-O(n)-%2B-javascript
// oh my head...
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    let uniqueIdx = 0;
    for (let i = 0; i < nums.length -  1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[uniqueIdx++] = nums[i];
        }
    }
    nums[uniqueIdx] = nums[nums.length - 1];

    return uniqueIdx + 1;
};

console.assert(removeDuplicates([]) === 0);
console.assert(removeDuplicates([1]) === 1);
console.assert(removeDuplicates([1, 1, 2]) === 2);
console.assert(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5)