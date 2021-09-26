/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const frequency = {};

  for (let i = 0; i < nums1.length; i++) {
    if (frequency[nums1[i]] === undefined) {
      frequency[nums1[i]] = [1, 0];
    } else {
      frequency[nums1[i]][0] += 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (frequency[nums2[i]]) frequency[nums2[i]][1] += 1;
  }

  const result = [];
  Object.keys(frequency).forEach((key) => {
    const frequencyCnt = Math.min(frequency[key][0], frequency[key][1]);
    for (let i = 0; i < frequencyCnt; i++) {
      result.push(key);
    }
  });

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
