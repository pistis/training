/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let num = symbols[s[s.length - 1]];
  let prev = num;
  for (let i = s.length - 2; i >= 0; i--) {
    let current = symbols[s[i]];
    if (current < prev) {
      num -= current;
    } else {
      num += current;
    }
    prev = current;
  }

  return num;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
