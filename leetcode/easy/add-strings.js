// https://leetcode.com/problems/add-strings/
/**
 * time complexity : O(n), brute force
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const len = num1.length > num2.length ? num1.length : num2.length
    let num1Len = num1.length
    let num2Len = num2.length
    let n1 = n2 = sum = carry = unit = 0
    let output = []
    
    for (let c = len - 1; c >= 0; c--) {
        n1 = num1Len ? parseInt(num1[--num1Len]) : 0
        n2 = num2Len ? parseInt(num2[--num2Len]) : 0
        sum = carry + n1 + n2
        carry = parseInt((sum) / 10)
        unit = sum % 10
        output.push(unit)
    }
    if (carry) {
        output.push(carry)
    }
    return output.reverse().join('')
};

console.assert(addStrings('0', '0').toString() === '0'.toString())
console.assert(addStrings('123', '12').toString() === '135'.toString())
