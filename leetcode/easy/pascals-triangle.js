// https://leetcode.com/problems/pascals-triangle/submissions/
/**
 * time complexity : O(n2), brute force
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const output = []
    const defaultNum = 1
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            output.push([defaultNum])
        } else if (i === 1) {
            output.push([defaultNum, defaultNum])
        } else {
            const limit = i
            const arr = [defaultNum]
            
            for (let j = 1; j < limit; j++) {
                const preArr = output[i - 1]
                let sum = preArr[j - 1] + preArr[j]
                arr.push(sum)
            }
            
            arr.push(defaultNum)
            output.push(arr)
        }
    }
    return output
};

const answer = [
    [1],
   [1,1],
  [1,2,1],
 [1,3,3,1],
[1,4,6,4,1]
]
console.assert(generate(5).toString() === answer.toString())
