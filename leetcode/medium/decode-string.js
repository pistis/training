// https://leetcode.com/problems/decode-string/
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const len = s.length;
  let stack = [];
  let numbers = [];
  for (let i = 0; i < len; i++) {
    let char = s[i];
    if (!isNaN(char)) {
      numbers.push(char);
    } else if (char === "[") {
      stack.push(numbers.join(""));
      numbers = [];
    } else if (char === "]") {
      let repeats = [];
      let k = 0;
      while (stack.length > 0) {
        let item = stack.pop();
        if (isNaN(item)) {
          repeats.push(item);
        } else {
          k = parseInt(item, 10);
          break;
        }
      }
      stack.push(
        repeats
          .reverse()
          .join("")
          .repeat(k)
      );
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
console.assert(decodeString("3[a]2[bc]") === "aaabcbc");
console.assert(decodeString("3[a2[c]]") === "accaccacc");
console.assert(decodeString("2[abc]3[cd]ef") === "abcabccdcdcdef");
