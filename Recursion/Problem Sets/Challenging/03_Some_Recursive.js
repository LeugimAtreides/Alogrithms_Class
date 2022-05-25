/**
 * SOME RECURSIVE
 * Write a function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false
 * 1. Understand the problem
 *  - Restate;
 *      - Parse through an array and apply the callback, break recursion when an element returns as true
 *  - Inputs
 *      - Array of numbers
 *      - Callback doing something to said numbers
 *  - Output
 *      - Boolean
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

function someRecursive(arr = [], cb = () => a = false) {
    // BASE CASE
    if (arr.length === 0) {
        return false
    }

    // run callback on current arr index
    // break and return if true
    // continue recursion if false
    return cb(arr[0]) || someRecursive(arr.slice(1), cb)
}

// Function to use as callback
function isOdd(val) {
    return val % 2 !== 0
}

function someRecursiveRefactor(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursiveRefactor(array.slice(1), callback)
}


console.log(
    '\n',
    '--------SOME RECURSIVE SOLUTIONS---------',
    '\n',
    'Expected true and got', someRecursive([1, 2, 3, 4], isOdd),
    '\n',
    'Expected true and got', someRecursive([4, 6, 8, 9], isOdd),
    '\n',
    'Expected false and got', someRecursive([4, 6, 8], isOdd),
    '\n',
    'Expected false and got', someRecursive([4,6,8], val => val > 10),
    '\n',
    `-----------END--------------------`
)