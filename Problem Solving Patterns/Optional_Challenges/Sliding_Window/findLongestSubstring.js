/**
 * FIND LONGEST SUB-STRING
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinc characters.
 * 1. Understand the problem
 *  - Restate:
 *      - Given a string, return the length of the longest string of non-repeating characters inside of the input string
 *  - Inputs
 *      - String
 * - Outputs
 *      - Integer representing sub-string length
 *  - Data points
 *      - pointer for longest
 *      - pointer for start
 *      - freq counter
 * 2. Concrete Examples: See Below
 * 3. Break It Down: See code comments
 * 4. Solve/Simplify: See code
 * 5. Refactor
 *  - ???
 */

function findLongestSubstring(str = '') {
    // Edge case for empty string
    if (!str.length) return 0;

    // init pointers for start, seen, longest substring
    let start = 0, seen = {}, longest = 0;

    // init loop that counts through string
    for (let i = 0; i < str.length; i++) {

        // init char pointer to track character
        let char = str[i]

        // check if char has already been seen
        if (seen[char]) {

            // if so then set start equal to the max between the count of char in seen and start
            start = Math.max(start, seen[char])
        }

        // set longest
        longest = Math.max(longest, i - start + 1)

        // store index of the next char so to not double count
        seen[char] = i + 1
    }
    // return longest
    return longest
}

console.log(
    '\n',
    '-------FIND LONGEST SUB-STRING SOLUTIONS--------',
    '\n',
    findLongestSubstring('rithmschool'), '  Expected: 7',
    '\n',
    findLongestSubstring(''), '  Expected: 0',
    '\n',
    findLongestSubstring('thisisawesome'), '  Expected: 6',
    '\n',
    findLongestSubstring('thecatinthehat'), '  Expected: 7',
    '\n',
    '-----------------END-----------------'
)