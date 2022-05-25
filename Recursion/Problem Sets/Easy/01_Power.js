/**
 * POWER
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow()
 * Do not worry about negative bases and exponents
 * 1. Understand the problem
 *  - Restate;
 *      - Given a base number and an exponent write a recursive function that returns the base times itself the amount of times specified by exponent input
 *  - Inputs
 *      - Base: Positive Int
 *      - Exponent: Positive Int
 *  - Output
 *      - Result of Base^Exponent
 *  - Data points
 *      - pointer for total
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

function power(base, exp) {
    // Set base case
    if (exp === 0) {
        return 1
    }

    // return base times recursive call with changing inputs
    return base * power(base, exp - 1)
}

// power(2, 4)
    // return 2 * power(2, 3) = 8
        // return 2 * power(2, 2) = 4
            // return 2 * power(2, 1) = 2
                // return 2 * power(2, 0) = 1
                    // return 1

console.log(
    '--------POWER SOLUTIONS---------',
    '\n',
    'Expected 1 and got', power(2, 0),
    '\n',
    'Expected 4 and got', power(2, 2),
    '\n',
    'Expected 16 and got', power(2, 4),
    '\n',
    `-----------END--------------------`
)