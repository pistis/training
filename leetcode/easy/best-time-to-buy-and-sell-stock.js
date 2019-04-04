// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * time complexity : O(n)
 * space complexity : O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) {
    return 0
  }
  let initValue = prices[0]
  let min = {
    value : initValue,
    index : 0
  }
  let max = {
    value : initValue,
    index : 0
  }
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    let price = prices[i]

    if (min.value > price) {
      if (i !== prices.length - 1) {
        min.value = price
        min.index = i
        max.value = price
      }
    }

    if (price > max.value) {
      max.value = price
      max.index = i
    }
    if (min.index < max.index && max.value - min.value > profit) {
      profit = max.value - min.value
    }
  }

  return profit
};

// improvement (solution)
/**
 * time complexity : O(n)
 * space complexity : O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Number.MAX_VALUE
  let max = 0
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i]
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min
    }
  }

  return profit
};

console.assert(maxProfit([7,1,5,3,6,4]) === 5)
console.assert(maxProfit([7,6,4,3,1]) === 0)
console.assert(maxProfit([2, 4, 1]) === 2)
console.assert(maxProfit([3,2,6,5,0,3]) === 4)
console.assert(maxProfit([2,1,2,1,0,1,2]) === 2)
console.assert(maxProfit([4,7,2,1]) === 3)