/**
 * https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  const count = new Map();
  for (let i = 0; i < s.length; i++) {
    if (count.has(s[i])) {
      count.set(s[i], count.get(s[i]) + 1);
    } else {
      count.set(s[i], 1);
    }
  }

  const stack = [];
  const used = {};
  "abcdefghijklmnoprqstuvwxyz".split("").reduce((acc, cur) => {
    acc[cur] = false;
    return acc;
  }, used);

  // console.log(used)
  // console.log(count);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    count.set(c, count.get(c) - 1);

    if (used[c] === true) {
      continue;
    }

    while (
      stack.length > 0 &&
      stack[stack.length - 1] > c &&
      count.get(stack[stack.length - 1]) > 0
    ) {
      used[stack.pop()] = false;
    }

    stack.push(c);
    used[c] = true;
  }

  return stack.join("");
};

console.assert(smallestSubsequence("bcabc") === "abc");
console.assert(smallestSubsequence("cbacdcbc") === "acdb");
console.assert(smallestSubsequence("cdadabcc") === "adbc");
console.assert(smallestSubsequence("ecbacba") === "eacb");
