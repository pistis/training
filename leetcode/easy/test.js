// 문제 풀때 테스트하는 용도의 파일
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Cursor = m - 1;
  let nums2Cursor = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    let numA = nums1Cursor >= 0 ? nums1[nums1Cursor] : -Infinity;
    let numB = nums2Cursor >= 0 ? nums2[nums2Cursor] : -Infinity;
    if (numA > numB) {
      nums1[i] = numA;
      nums1Cursor--;
    } else {
      nums1[i] = numB;
      nums2Cursor--;
    }
  }
};

const arr1 = [1, 2, 3, 0, 0, 0];
merge(arr1, 3, [2, 5, 6], 3);
console.log(arr1);

const arr2 = [1];
merge(arr2, 1, [], 0);
console.log(arr2);

const arr3 = [0];
merge(arr3, 0, [1], 1);
console.log(arr3);

const arr4 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
merge(arr4, 6, [1, 2, 2], 3);
console.log(arr4);
