/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let shiftCount = 0;
  for (let i = 0; i < shift.length; i++) {
    const [dir, cnt] = shift[i];
    if (dir === 0) {
      shiftCount += cnt;
    } else if (dir === 1) {
      shiftCount -= cnt;
    }
  }

  let resultShift = 0;
  if (shiftCount < 0) {
    resultShift = s.length - (Math.abs(shiftCount) % s.length);
  } else {
    resultShift = shiftCount % s.length;
  }

  return s.substr(resultShift) + s.substr(0, resultShift);
};

console.log(
  stringShift("abc", [
    [0, 1],
    [1, 2],
  ])
); // "cab"
console.log(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ])
); // "efgabcd"
console.log(
  stringShift("xqgwkiqpif", [
    [1, 4],
    [0, 7],
    [0, 8],
    [0, 7],
    [0, 6],
    [1, 3],
    [0, 1],
    [1, 7],
    [0, 5],
    [0, 6],
  ])
);
