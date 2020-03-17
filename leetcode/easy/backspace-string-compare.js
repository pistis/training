// https://leetcode.com/problems/backspace-string-compare/
/**
 * Runtime: 56 ms, faster than 83.33%
 * Memory Usage: 35.5 MB, less than 33.33%
 * Time complexity : O(N), Space complexity : O(N)
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return backspaceString(S) === backspaceString(T);
};

function backspaceString(str) {
  const stack = [];
  for (let ch of str) {
    if (ch === "#") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join("");
}

console.assert(backspaceCompare("ab#c", "ad#c"));
console.assert(backspaceCompare("ab##", "c#d#"));
console.assert(backspaceCompare("a##c", "#a#c"));
console.assert(!backspaceCompare("a#c", "b"));
