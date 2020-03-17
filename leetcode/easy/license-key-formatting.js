// https://leetcode.com/problems/license-key-formatting/
/**
 * Runtime: 68 ms, faster than 72.73%
 * Memory Usage: 41.4 MB, less than 57.14%
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let licenseKey = "";
  const dash = "-";
  let count = 0,
    piece = "";
  for (let i = S.length - 1; i >= 0; i--) {
    let ch = S[i];
    if (ch === dash) {
      continue;
    }
    count++;
    piece = ch + piece;
    if (count === K) {
      licenseKey = dash + piece.toUpperCase() + licenseKey;
      piece = "";
      count = 0;
    }
  }
  licenseKey = piece.toUpperCase() + licenseKey;
  return licenseKey[0] === dash ? licenseKey.substr(1) : licenseKey;
};

console.assert(licenseKeyFormatting("5F3Z-2e-9-w", 4) === "5F3Z-2E9W");
console.assert(licenseKeyFormatting("2-5g-3-J", 2) === "2-5G-3J");
console.assert(licenseKeyFormatting("2-4A0r7-4k", 4) === "24A0-R74K");
