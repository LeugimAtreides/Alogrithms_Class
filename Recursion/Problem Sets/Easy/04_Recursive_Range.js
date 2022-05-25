/**
 * RECURSIVE RANGE
 * Write a function called recursiveRange which accepts a number and adds up all numbers from 0 to the number passed into the function
 * 1. Understand the problem
 *  - Restate;
 *      - Given a number, find out the total of adding all the numbers from itself down to zero
 *  - Inputs
 *      - Number Int
 *  - Output
 *      - Result of 0 + 1 + 2 + 3... + Number
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

 function recursiveRange(n) {
    // BASE CASE
    if (n === 0) {
        return 0
    }

    // RECURSIVE CALL WITH CHANGING ELEMENT
    return n + recursiveRange(n - 1)
}


console.log(
    '\n',
    '--------RECURSIVE RANGE SOLUTIONS---------',
    '\n',
    'Expected 21 and got', recursiveRange(6),
    '\n',
    'Expected 55 and got', recursiveRange(10),
    '\n',
    `-----------END--------------------`
)