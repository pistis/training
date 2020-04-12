function BinaryHeap(data, compare) {
  this.data = data || [];
  this.heapLen = 0;
  this.compare =
    compare ||
    function (a, b) {
      return a - b;
    };
}

BinaryHeap.prototype.get = function (idx) {
  return this.data[idx - 1];
};

BinaryHeap.prototype.set = function (idx, value) {
  this.data[idx - 1] = value;
};

BinaryHeap.prototype.insert = function (value) {
  this.set(++this.heapLen, value);
  this.upHeap(this.heapLen);
};

BinaryHeap.prototype.upHeap = function (idx) {
  var value = this.get(idx);

  while (this.compare(value, this.get(parseInt(idx / 2))) >= 0 && idx > 1) {
    this.set(idx, this.get(parseInt(idx / 2)));
    idx = parseInt(idx / 2);
  }
  this.set(idx, value);
};

BinaryHeap.prototype.extract = function () {
  if (this.heapLen == 0) {
    return null;
  }
  var value = this.get(1);
  this.set(1, this.get(this.heapLen--));
  this.downHeap(1);
  this.data.pop();
  return value;
};

BinaryHeap.prototype.downHeap = function (idx) {
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

BinaryHeap.prototype.peek = function () {
  if (this.heapLen == 0) {
    return null;
  }
  return this.get(1);
};

BinaryHeap.prototype.getLength = function () {
  return this.heapLen;
};

BinaryHeap.prototype.setLength = function (length) {
  this.heapLen = length;
};

BinaryHeap.prototype.getData = function () {
  return this.data;
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new BinaryHeap([], function (a, b) {
    return a - b;
  });
  stones.forEach(heap.insert.bind(heap));
  //   while (heap.getLength() > 0) {
  //     console.log(heap.extract());
  //   }
  while (heap.getLength() > 1) {
    const y = heap.extract();
    const x = heap.extract();
    heap.insert(y - x);
  }

  return heap.extract();
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
