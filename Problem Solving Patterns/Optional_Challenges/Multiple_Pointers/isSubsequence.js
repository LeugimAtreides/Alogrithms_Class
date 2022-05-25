/**
 * IS SUBSEQUENCE
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear in the second string, without their order changing
 * 1. Understand the problem
 *  - Restate:
 *      - Create a process that determines if a set of consecutive characters in the first input string appear in the second string input in the same order
 *  - Inputs:
 *      - First: String
 *      - Second: String
 *  - Outputs:
 *      - Boolean
 *  - Inputs => Outputs?
 *      - Unknown at this time
 *  - Data Points:
 *      - First pointer
 *      - Second pointer
 *      - Sub string holder
 * 2. Examples: See below
 * 3. Break Down: See below in code comments
 * 4. Solve/Simplify: See below
 * 5. Refactor:
 *  - ???
 */

function isSubsequence(str1, str2) {
    // Check edge case for str1 not existing
    if (!str1.length) return false

    // init pointer one, init pointer two
    let i = 0, j = 0

    // run while condition for length of second string
    while (j < str2.length) {
        // if str1 position at first pointer is equal to str2 position at first pointer then increase first pointer
        if (str1[i] === str2[j]) i++

        // if first pointer becomes equal to length of first string then return true
        if (i === str1.length) return true

        // increase second pointer
        j++
    }
    // return false
    return false
}

console.log(
    '\n',
    '-------IS SUBSEQUENCE SOLUTIONS--------',
    '\n',
    isSubsequence('hello', 'hello world'), '  Expected: TRUE',
    '\n',
    isSubsequence('sing', 'sting'), '  Expected: TRUE',
    '\n',
    isSubsequence('abc', 'abracadabra'), '  Expected: TRUE',
    '\n',
    isSubsequence('abc', 'acb'), ' Expected: FALSE',
    '\n',
    '-----------------END-----------------'
)