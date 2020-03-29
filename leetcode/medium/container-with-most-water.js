/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0;

  for (let j = height.length - 1; j > 0; j--) {
    let limit = height[j];
    for (let i = 0; i < j; i++) {
      let w = j - i;
      let h = Math.min(height[i], limit);
      area = Math.max(w * h, area);
    }
  }

  return area;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
maxArea([2, 3, 4, 5, 18, 17, 6]); // 17
