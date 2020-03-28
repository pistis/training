/**
 * https://leetcode.com/problems/k-closest-points-to-origin
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  points.sort((a, b) => {
    return EuclideanDistance([0, 0], a) - EuclideanDistance([0, 0], b);
  });

  return points.splice(0, K);
};

function EuclideanDistance(point1, point2) {
  return Math.sqrt(
    Math.abs(
      Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
    )
  );
}

kClosest(
  [
    [3, 3],
    [5, -1],
    [-2, 4]
  ],
  2
);
kClosest(
  [
    [1, 3],
    [-2, 2]
  ],
  1
);
