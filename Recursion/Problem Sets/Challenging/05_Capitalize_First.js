/**
 * CAPITALIZE FIRST
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array
 * 1. Understand the problem
 *  - Restate;
 *      - Parse through an array and if the item in the array is an array then bring it to the top level of the original array
 *  - Inputs
 *      - Array with strings
 *  - Output
 *      - Array with strings where the first char is uppercase
 *  - Data points
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

function capitalizeFirst(strings = [""]) {
    // init new array
    let newArr = []

    // init base case
    if (strings.length === 0) {
        return newArr
    }

    // init char variable to keep track of first item with uppercase
    let str = strings[0].split('')

    str[0] = str[0].toUpperCase()

    newArr.push(str.join(''))
    // concat to new array

    newArr = newArr.concat(capitalizeFirst(strings.slice(1)))

    return newArr
}

console.log(
    '\n',
    '--------SOME RECURSIVE SOLUTIONS---------',
    '\n',
    'Expected "["Car", "Taco", "Banana"]" and got', capitalizeFirst(['car', 'taco', 'banana']),
    '\n',
    `-----------END--------------------`
)