/**
 * solution 보고 일단 품
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const map = new Map();
  map.set(0, -1);
  let maxlen = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count = count + (nums[i] == 1 ? 1 : -1);
    if (map.has(count)) {
      maxlen = Math.max(maxlen, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }
  return maxlen;
};

console.log(findMaxLength([0, 1])); // 2
console.log(findMaxLength([0, 1, 0])); // 2
console.log(findMaxLength([0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0])); // 8
console.log(findMaxLength([0, 0, 0, 1, 1, 1, 0])); // 6
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])); // 6
