// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
/**
 * Runtime: 76 ms, faster than 91.93% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.
 * Memory Usage: 41.7 MB, less than 100.00% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  const dominoLength = A.length;
  if (dominoLength === 1) return 0;

  const commons = [];
  const firstDomino = [A[0], B[0]];
  const secondDomino = [A[1], B[1]];

  if (firstDomino.indexOf(secondDomino[0]) !== -1)
    commons.push(secondDomino[0]);
  if (firstDomino.indexOf(secondDomino[1]) !== -1)
    commons.push(secondDomino[1]);

  if (commons.length === 0) return -1;
  if (commons[0] - commons[1] === 0) commons.shift();

  let existAside = 0;
  let existBside = 0;
  let rotationFailed = 0;

  for (let j = 0; j < commons.length; j++) {
    let failed = false;
    const common = commons[j];
    for (let i = 0; i < dominoLength; i++) {
      if (A[i] === common) existAside++;
      if (B[i] === common) existBside++;
      if (A[i] !== common && B[i] !== common) {
        rotationFailed++;
        failed = true;
        break;
      }
    }
    if (failed) {
      existAside = existBside = 0;
    } else {
      break;
    }
  }

  if (commons.length === rotationFailed) {
    return -1;
  } else {
    const rotationAside = dominoLength - existAside;
    const rotationBside = dominoLength - existBside;
    return rotationAside > rotationBside ? rotationBside : rotationAside;
  }
};

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));
console.log(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]));
console.log(minDominoRotations([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));
console.log(
  minDominoRotations([1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1])
);
console.log(
  minDominoRotations([1, 2, 1, 1, 1, 2, 2, 2], [2, 1, 2, 2, 2, 2, 2, 2])
);
console.log(
  minDominoRotations([1, 4, 1, 6, 6, 1, 6, 2], [2, 2, 5, 3, 1, 5, 6, 6])
);
