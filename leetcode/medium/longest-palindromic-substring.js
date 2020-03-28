/**
 * time over...한 해결방법
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
  if (!str) return "";
  if (str.length === 1) return str;

  let maximumPalindrome = "";
  const startLimit = str.length - 2;
  const endLimit = str.length - 1;

  for (let start = 0; start <= startLimit; start++) {
    for (let end = start + 1; end <= endLimit; end++) {
      const substr = str.substring(start, end + 1);
      if (substr[0] === substr[substr.length - 1] && isPalindrome(substr)) {
        if (maximumPalindrome.length < substr.length) {
          maximumPalindrome = substr;
        }
      }
    }
  }

  return maximumPalindrome || str[0];
};

function isPalindrome(str) {
  const len = str.length;
  if (len === 1) return true;

  if (len === 2) {
    return str[0] === str[1];
  }
  let end = len / 2 - 1;
  for (let i = 0; i <= end; i++) {
    if (str[i] !== str[len - (i + 1)]) {
      return false;
    }
  }
  return true;
}

console.time("test1");
const str =
  "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
console.log(longestPalindrome(str));
console.timeEnd("test1");
// console.log("babad", longestPalindrome("babad")); // bab, aba
// console.log("cbbd", longestPalindrome("cbbd")); // bb
// console.log("a", longestPalindrome("a")); // a
// console.log("ac", longestPalindrome("ac")); // a
// console.log("abcda", longestPalindrome("abcda")); // a

// console.log(isPalindrome("aaabaaaa"));
// console.log(isPalindrome("abda"));
