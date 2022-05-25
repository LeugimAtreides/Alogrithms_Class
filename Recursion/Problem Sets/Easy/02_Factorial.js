/**
 * FACTORIAL
 * Write a function called factorial which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it
 * 1. Understand the problem
 *  - Restate;
 *      - Given a number return the product of the number and all the numbers below it to 0
 *  - Inputs
 *      - INT
 *  - Output
 *      - Result of Int * Int - 1 * Int - 2 etc...
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

function factorial(n) {
    // BASE CASE
    if (n <= 0) {
        return 1
    }

    // RECURSIVE CALL WITH CHANGING ELEMENT
   return n * factorial(n - 1)
}


console.log(
    '--------FACTORIAL SOLUTIONS---------',
    '\n',
    'Expected 1 and got', factorial(1),
    '\n',
    'Expected 2 and got', factorial(2),
    '\n',
    'Expected 24 and got', factorial(4),
    '\n',
    'Expected 5040 and got', factorial(7),
    '\n',
    `-----------END--------------------`
)