/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (str) {
  let lo = 0;
  let hi = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      lo++;
      hi++;
    } else if (str[i] === "*") {
      lo--;
      hi++;
    } else {
      lo--;
      hi--;
    }
    if (hi < 0) break;
    lo = Math.max(lo, 0);
  }
  return lo === 0;
};
