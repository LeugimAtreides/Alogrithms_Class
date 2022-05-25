/**
 * REVERSE
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse
 * 1. Understand the problem
 *  - Restate;
 *      - Flip a string
 *  - Inputs
 *      - String
 *  - Output
 *      - String with char in reverse order
 *  - Data points
 *      - Pointer for reversed string
 *      - Base Case for ending recursion
 *      - Recursive Call with Changing Element
 * 2. Concrete Examples
 *  - See below
 * 3. Break Down
 *  - See code comments
 * 4. Solve/Simplify
 *  - See code
 * 5. Refactor
 *  - ???
 */

function reverse(str = '') {
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
    return result.join('')
}

function reverseRefactor(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1) + str[0])
}

console.log(
    '\n',
    '--------REVERSE SOLUTIONS---------',
    '\n',
    'Expected "emosewa" and got', reverse('awesome'),
    '\n',
    'Expected "loochsmhtir" and got', reverse('rithmscool'),
    '\n',
    `-----------END--------------------`
)