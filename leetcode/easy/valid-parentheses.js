// https://leetcode.com/problems/valid-parentheses/
/**
 * time complexity : O(n), brute force
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    const bracketPairs = {
        '(': ')', '[': ']', '{': '}'
    }
    const syntaxStack = []
    const len = s.length
    for (let i = 0; i < len; i++) {
        let code = s[i].charCodeAt()
        if (code === 40 || code === 91 || code === 123) {
            syntaxStack.push(bracketPairs[s[i]])
        } else if (code === 41 || code === 93 || code === 125) {
            if (syntaxStack.pop() !== s[i]) {
                return false
            }
        } else {
            return false
        }
    }

    return !syntaxStack.length
};
console.assert(isValid('()'))
console.assert(isValid('([{}])'))
console.assert(isValid('()[]{}'))
console.assert(isValid(''))
console.assert(isValid('((') === false)
console.assert(isValid('][') === false)
console.assert(isValid('{)') === false)