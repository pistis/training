/**
 * https://leetcode.com/problems/k-closest-points-to-origin
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  const heap = new BinaryHeap([], (a, b) => {
    return EuclideanDistance([0, 0], a) - EuclideanDistance([0, 0], b);
  });

  for (let point of points) {
    heap.insert(point);

    if (heap.getLength() > K) {
      heap.extract();
    }
  }

  return heap.getData();
};

function EuclideanDistance(point1, point2) {
  return Math.sqrt(
    Math.abs(
      Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
    )
  );
}

// https://github.com/pistis/algorithm/blob/master/src/js/util/binary-heap.js
function BinaryHeap(data, compare) {
  this.data = data || [];
  this.heapLen = 0;
  this.compare =
    compare ||
    function(a, b) {
      return a - b;
    };
}

BinaryHeap.prototype.get = function(idx) {
  return this.data[idx - 1];
};

BinaryHeap.prototype.set = function(idx, value) {
  this.data[idx - 1] = value;
};

BinaryHeap.prototype.insert = function(value) {
  this.set(++this.heapLen, value);
  this.upHeap(this.heapLen);
};

BinaryHeap.prototype.upHeap = function(idx) {
  var value = this.get(idx);

  while (idx > 1 && this.compare(value, this.get(parseInt(idx / 2))) >= 0) {
    this.set(idx, this.get(parseInt(idx / 2)));
    idx = parseInt(idx / 2);
  }
  this.set(idx, value);
};

BinaryHeap.prototype.extract = function() {
  if (this.heapLen == 0) {
    return null;
  }
  var value = this.get(1);
  this.set(1, this.get(this.heapLen--));
  this.downHeap(1);
  this.data.pop();
  return value;
};

BinaryHeap.prototype.downHeap = function(idx) {
  var value = this.get(idx);
  var i;
  while (idx <= this.heapLen / 2) {
    // 내부노드일때에만
    i = idx * 2;
    if (i < this.heapLen && this.compare(this.get(i + 1), this.get(i)) > 0) i++;
    if (this.compare(value, this.get(i)) >= 0 || value == this.get(i)) break;
    this.set(idx, this.get(i));
    idx = i;
  }
  this.set(idx, value);
};

BinaryHeap.prototype.peek = function() {
  if (this.heapLen == 0) {
    return null;
  }
  return this.get(1);
};

BinaryHeap.prototype.getLength = function() {
  return this.heapLen;
};

BinaryHeap.prototype.setLength = function(length) {
  this.heapLen = length;
};

BinaryHeap.prototype.getData = function() {
  return this.data;
};

kClosest(
  [
    [3, 3],
    [5, -1],
    [-2, 4]
  ],
  2
);
// kClosest(
//   [
//     [1, 3],
//     [-2, 2]
//   ],
//   1
// );
