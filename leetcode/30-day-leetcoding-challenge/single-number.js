/**
 * Runtime: 60 ms
 * Memory Usage: 37.5 MB
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = nums.reduce((map, item) => {
    map[item] = map[item] ? map[item] + 1 : 1;
    return map;
  }, {});

  const singleNumber = Object.keys(map).find(key => {
    return map[key] === 1;
  });
  return singleNumber;
};

singleNumber([2, 2, 1]);
singleNumber([4, 1, 2, 1, 2]);
