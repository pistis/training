// https://leetcode.com/problems/kth-largest-element-in-a-stream
// 여기까지 스스로 품... 단, 다량의 데이터 일때 time limit...(무식하게 품)
function BinaryHeap(data, compare) {
    this.data = data || [];
    this.heapLen = 0;
    this.compare = compare || function(a, b) {
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

    while (this.compare(value, this.get(parseInt(idx/2))) >= 0 && idx > 1) {
        this.set(idx, this.get(parseInt(idx/2)));
        idx = parseInt(idx/2);
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
    this.data.pop()
    return value;
};

BinaryHeap.prototype.downHeap = function(idx) {
    var value = this.get(idx);
    var i;
    while (idx <= this.heapLen / 2) {    // 내부노드일때에만
        i = idx * 2;
        if (i < this.heapLen && this.compare(this.get(i+1), this.get(i)) > 0) i++;
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

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.largest = k
    this.heap = new BinaryHeap()
    nums.forEach((v) => {
        this.heap.insert(v)
})
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.insert(val)
    let result = null
    let extracted = []
    for (let i = 0; i < this.largest; i++) {
        result = this.heap.extract()
        extracted.push(result)
    }

    extracted.forEach((v) => {
        this.heap.insert(v)
})
    return result
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
var kthLargest = new KthLargest(3, [4,5,8,2]);
var result = []
result.push(kthLargest.add(3))
result.push(kthLargest.add(5))
result.push(kthLargest.add(10))
result.push(kthLargest.add(9))
result.push(kthLargest.add(4))

console.assert(result.toString() === [4,5,5,8,8].toString())
