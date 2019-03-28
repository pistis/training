// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true

  let sx = String(x)
  let len = sx.length
  if (len === 2) {
    return sx[0] === sx[1]
  }
  let end = len / 2 - 1
  for (let i = 0; i < end; i++) {
    if (sx[i] !== sx[len - (i + 1)]) {
      return false
    }
  }
  return true
};
console.assert(isPalindrome(121) === true)
console.assert(isPalindrome(-121) === false)
console.assert(isPalindrome(10) === false)
