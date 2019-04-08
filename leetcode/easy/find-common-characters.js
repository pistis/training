// https://leetcode.com/problems/find-common-characters/
/**
 * time complexity : O(n2)
 * space complexity : O(1)?
 * @param {string[]} A
 * @return {string[]}
 */
var getAlphabetMap = function() {
    let alphabet = {}
    for (let i = 97; i <= 122; i++) {
        alphabet[String.fromCharCode(i)] = 0
    }
    return alphabet
}
var commonChars = function(A) {
    let alphabet = getAlphabetMap()

    for (let i = 0; i < A[0].length; i++) {
        alphabet[A[0][i]]++
    }
    for (let i = 1; i < A.length; i++) {
        let map = getAlphabetMap()
        for (let j = 0; j < A[i].length; j++) {
            if (alphabet[A[i][j]] > 0) {
                alphabet[A[i][j]]--
                map[A[i][j]]++
            }
        }
        alphabet = map
    }

    let result = []
    Object.keys(alphabet).forEach((key) => {
        for (let i = 0; i < alphabet[key]; i++) {
            result.push(key)
        }
    })
    return result
};

console.assert(commonChars(["bella","label","roller"]).toString() === ["e", "l", "l"].toString())
console.assert(commonChars(["cool","lock","cook"]).toString() === ["c", "o"].toString())