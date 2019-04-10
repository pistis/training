// https://leetcode.com/problems/remove-comments/
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    const LINE_COMMENT_START_TOKEN = '//'
    const BLOCK_COMMENT_START_TOKEN = '/*'
    const BLOCK_COMMENT_END_TOKEN = '*/'

    let removedSource = []
    for (let i = 0; i < source.length; i++) {
        let line = source[i]
        let lineCommentStartIndex, blockCommentStartIndex, blockCommentEndIndex
        let continueBlockComment = false
        let code
        lineCommentStartIndex = line.indexOf(LINE_COMMENT_START_TOKEN)
        blockCommentStartIndex = line.indexOf(BLOCK_COMMENT_START_TOKEN)

        if (lineCommentStartIndex === -1 && blockCommentStartIndex === -1) {    // no comments
            if (line.length > 0) {
                removedSource.push(line)
            }
        } else {
            if (lineCommentStartIndex !== -1 && blockCommentStartIndex !== -1) {
                if (lineCommentStartIndex < blockCommentStartIndex) {   // single
                    code = line.substring(0, lineCommentStartIndex)
                    if (code.length > 0) {
                        removedSource.push(code)
                    }
                } else {    // block
                    blockCommentEndIndex = line.indexOf(BLOCK_COMMENT_END_TOKEN)
                    if (blockCommentEndIndex !== -1) {  // same line
                        code = line.substring(0, blockCommentStartIndex) + line.substring(blockCommentEndIndex + 2)
                        if (code.length > 0) {
                            removedSource.push(code)
                        }
                    } else {    // multi lines
                        continueBlockComment = true
                        // to be continue
                    }
                }
            } else if (lineCommentStartIndex !== -1) {  // single
                code = line.substring(0, lineCommentStartIndex)
                if (code) {
                    removedSource.push(code)
                }
            } else if (blockCommentStartIndex !== -1) { // block
                blockCommentEndIndex = line.indexOf(BLOCK_COMMENT_END_TOKEN)
                if (blockCommentEndIndex !== -1) {  // same line
                    code = line.substring(0, blockCommentStartIndex) + line.substring(blockCommentEndIndex + 2)
                    if (code.length > 0) {
                        removedSource.push(code)
                    }
                } else {    // multi lines
                    continueBlockComment = true
                    // to be continue
                }
            }
        }
    }

    return removedSource
};

var noCase = ["int main()", "{ ", "   ", "int a, b, c;", "a = b + c;", "}"]
var singleCase = ["int main()", "{ ", "  // variable declaration ", "int a, b, c;", "a = b + c;", "}"]
var sameLineBlockCase = [" /*Test program */ ", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "a = b + c;", "}"]
var multiLineBlockCase = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]

console.assert(removeComments(noCase).toString() === ["int main()", "{ ", "   ", "int a, b, c;", "a = b + c;", "}"].toString())
console.assert(removeComments(singleCase).toString() === ["int main()", "{ ", "  ", "int a, b, c;", "a = b + c;", "}"].toString())
console.assert(removeComments(sameLineBlockCase).toString() === ["  ", "int main()", "{ ", "  ", "int a, b, c;", "a = b + c;", "}"].toString())
// console.assert(removeComments(multiLineBlockCase).toString() === ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"].toString())
console.log(removeComments(multiLineBlockCase))