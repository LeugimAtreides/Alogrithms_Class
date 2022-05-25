/**
 * RECURSIVE RANGE
 * Write a function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5... which starts with 1, and 1, and where every number thereafter is equal to the sum of the previous two numbers
 * 1. Understand the problem
 *  - Restate;
 *      - Given a number find the value of the fibonacci sequence at that number
 *  - Inputs
 *      - Number Int
 *  - Output
 *      - Int that represents the number at that position in the fibonacci sequence
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

function fib(n = 0) {
    // BASE CASE
    if (n <= 2) return 1

    // RECURSIVE CALL WITH CHANGING ELEMENT
    return fib(n - 1) + fib(n - 2)
}

// fib(6)
// fib(5) + fib(4)
// fib(4) + fib(3) || fib(3) + fib(2)
// fib(3) + fib(2) || fib(2) + fib(1) || fib(2) + fib(1) || 1
// fib(2) + fib(1) + 1 || 2 || 2 || 1
// 3 || 2 || 2 || 1
// 8

console.log(
    '\n',
    '--------FIB SOLUTIONS---------',
    '\n',
    'Expected 3 and got', fib(4),
    '\n',
    'Expected 8 and got', fib(6),
    '\n',
    'Expected 55 and got', fib(10),
    '\n',
    'Expected 317811 and got', fib(28),
    '\n',
    'Expected 9227465 and got', fib(35),
    '\n',
    `-----------END--------------------`
)