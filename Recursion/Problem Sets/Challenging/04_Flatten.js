/**
 * FLATTEN
 * Write a function called flatten which accepts an array of arrays and returns a new array wth all values flattened
 * 1. Understand the problem
 *  - Restate;
 *      - Parse through an array and if the item in the array is an array then bring it to the top level of the original array
 *  - Inputs
 *      - Array with sub-arrays
 *  - Output
 *      - Array with all values flattened
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

function flatten(oldArr) {
    let newArr = []

    for (let i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
        
    }
    return newArr
}

console.log(
    '\n',
    '--------SOME RECURSIVE SOLUTIONS---------',
    '\n',
    'Expected "[1, 2, 3, 4, 5]" and got', flatten([1, 2, 3, [4, 5]]),
    '\n',
    'Expected "[1, 2, 3, 4, 5]" and got', flatten([1, [2, [3, 4], [5]]]),
    '\n',
    'Expected "[1, 2, 3]" and got', flatten([[1], [2], [3]]),
    '\n',
    'Expected "[1, 2, 3]" false and got', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]),
    '\n',
    `-----------END--------------------`
)