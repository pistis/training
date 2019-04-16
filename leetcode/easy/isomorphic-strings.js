// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let len = s.length
    let dic = new Map()
    let used = new Map()
    for (let i = 0; i < len; i++) {
        let skey = s[i]
        let tkey = t[i]
        let val = dic.get(tkey)
        if (!val && !used.has(skey)) {
            dic.set(tkey, skey)
            used.set(skey, true)
        } else {
            if (val !== skey) return false
        }
    }

    return true
};

console.assert(isIsomorphic('egg', 'add') === true)
console.assert(isIsomorphic('foo', 'bar') === false)
console.assert(isIsomorphic('paper', 'title') === true)
console.assert(isIsomorphic('aa', 'ab') === false)