/**
 * IS PALINDROME
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward as backward).
 * Otherwise return false
 * 1. Understand the problem
 *  - Restate;
 *      - Flip a string and check if its the same as when unflipped
 *  - Inputs
 *      - String
 *  - Output
 *      - Boolean
 *  - Data points
 *      - Pointer for reversed string
 *      - Base Case for ending recursion
 *      - Recursive Call with Changing Element
 *      - check for string vs string
 * 2. Concrete Examples
 *  - See below
 * 3. Break Down
 *  - See code comments
 * 4. Solve/Simplify
 *  - See code
 * 5. Refactor
 *  - ???
 */

function isPalindrome(str = '') {
    // new string holder arr
    let result = []

    let splitStr = str.split('')

    // walker helper function
    function walk(strInput = []) {

        // recursive walker func base case
        if (strInput.length === 0) {
            return
        }

        const popped = strInput.pop()

        result.push(popped)

        // recursive walker func recursive call
        return walk(strInput)

    }

    // call walker function
    walk(splitStr)

    // return concat of new string
    return result.join('') === str
}

function isPalindromeRefactor(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindromeRefactor(str.slice(1, -1));
    return false;
}

console.log(
    '\n',
    '--------IS PALINDROME SOLUTIONS---------',
    '\n',
    'Expected FALSE and got', isPalindrome('awesome'),
    '\n',
    'Expected FALSE and got', isPalindrome('foobar'),
    '\n',
    'Expected TRUE and got', isPalindrome('tacocat'),
    '\n',
    'Expected TRUE and got', isPalindrome('amanaplanacanalpanama'),
    '\n',
    'Expected FALSE and got', isPalindrome('amanaplanacanalpandemonium'),
    '\n',
    `-----------END--------------------`
)