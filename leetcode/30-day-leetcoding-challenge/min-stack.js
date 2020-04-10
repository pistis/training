/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.min = Math.min(this.min, x);
  this.stack.push({ value: x, min: this.min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const [item] = this.stack.splice(this.stack.length - 1, 1);

  const lastItem = this.stack[this.stack.length - 1];
  this.min = lastItem ? lastItem.min : Number.MAX_VALUE;

  return item.value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length === 0) {
    return null;
  }
  return this.stack[this.stack.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // --> Returns -3.
console.log(minStack.pop()); // --> Returns -3
console.log(minStack.top()); // --> Returns 0.
console.log(minStack.getMin()); // --> Returns -2.
