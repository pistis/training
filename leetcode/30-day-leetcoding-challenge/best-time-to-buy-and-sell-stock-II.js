// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0;
  }
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
// console.assert(maxProfit([7, 1, 5, 3, 6, 4]) === 7);
// console.assert(maxProfit([1, 2, 3, 4, 5]) === 4);
// console.assert(maxProfit([7, 6, 4, 3, 1]) === 0);
