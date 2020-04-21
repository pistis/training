/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  const [N, M] = binaryMatrix.dimensions();
  let leftmost = -1;
  let n = 0;
  let m = M - 1;
  while (n < N && m >= 0) {
    let item = binaryMatrix.get(n, m);
    if (item === 1) {
      leftmost = m;
      m--;
    } else {
      n++;
    }
  }
  return leftmost;
};
