// https://leetcode.com/problems/contains-duplicate/
/**
 * 시간 복잡도 : O(NlogN) [O(NlogN) 정렬 -> 검사 O(N)]
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) return true;
    }
    return false;
};

console.assert(containsDuplicate([1,2,3,1]) === true)
console.assert(containsDuplicate([1,2,3,4]) === false)
console.assert(containsDuplicate([1,1,1,3,3,4,3,2,4,2]) === true)

// https://leetcode.com/problems/contains-duplicate/discuss/60872/1-line-JavaScript-solutions
// Set을 활용한 아주 간단한 방법 (공간을 더 사용하는 방법)
var containsDuplicate = function(nums) {
  return new Set(nums).size < nums.length;
};