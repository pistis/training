/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  numbers.sort();
  return numbers;
};

console.log(lexicalOrder(13)); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
