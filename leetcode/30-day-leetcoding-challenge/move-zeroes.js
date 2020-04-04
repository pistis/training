/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue;

    let nonZero = i + 1;
    while (nums[nonZero] === 0 && nonZero < nums.length) {
      nonZero++;
    }
    if (nonZero >= nums.length) return;
    swap(nums, i, nonZero);
  }
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
const arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1); // [1,3,12,0,0]
