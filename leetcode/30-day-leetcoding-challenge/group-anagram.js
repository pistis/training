/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  strs.forEach((str) => {
    const s = str.split("").sort().join("");
    map[s] = map[s] ? [str, ...map[s]] : [str];
  });

  return Object.keys(map).map((s) => {
    return map[s];
  });
};

/**
 * [
 *  ["ate","eat","tea"],
 *  ["nat","tan"],
 *  ["bat"]
 * ]
 */
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
