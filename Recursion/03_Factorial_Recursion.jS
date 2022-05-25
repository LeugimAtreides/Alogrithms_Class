/**
 * FACTORIAL RECURSION
 * Notation: n!
 * Iterative vs Recursive
 */

function factorialIterative(num) {
    let total = 1;
    for(let i = num; i > 1; i--) {
        total *= i
    }
    return total
}

function factorialRecursive(num) {
    // BASE CASE
    if (num === 1) return 1
    // RECURSIVE CALL WITH CHANGING INPUT
    return num * factorialIterative(num - 1)
}

factorialRecursive(3)
    // return 3 * factorialIterative(2) = 6
        // return 2 * factorialIterative(1) = 2
            // return 1