/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  const set = new Set(arr);
  return arr.reduce((count, x) => {
    return set.has(x + 1) ? count + 1 : count;
  }, 0);
};

console.log(countElements([1, 2, 3])); // 2

console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7])); // 0

console.log(countElements([1, 3, 2, 3, 5, 0])); // 3

console.log(countElements([1, 1, 2, 2])); // 2
