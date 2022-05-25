/**
 * PRODUCT OF ARRAY
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all
 * 1. Understand the problem
 *  - Restate;
 *      - Given an array return the total of multiplying every element in the array together
 *  - Inputs
 *      - Array of numbers
 *  - Output
 *      - Result of arr[0] * arr[1] * arr[2] etc...
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

 function productOfArray(arr) {
    // BASE CASE
    if (arr.length === 0) {
        return 1;
    }

    // RECURSIVE CALL
    return arr[0] * productOfArray(arr.slice(1))

}


console.log(
    '\n',
    '--------PRODUCT OF ARRAY SOLUTIONS---------',
    '\n',
    'Expected 6 and got', productOfArray([1,2,3]),
    '\n',
    'Expected 60 and got', productOfArray([1,2,3,10]),
    '\n',
    `-----------END--------------------`
)