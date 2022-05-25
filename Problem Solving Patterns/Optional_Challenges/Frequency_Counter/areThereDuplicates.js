/**
 * NOTE: THIS PROBLEM CAN BE SOLVED WIH THE FREQUENCY COUNTER PATTERN OR THE MULTIPLE POINTERS PATTERN THIS FILE WILL CONTAIN THE FREQUENCY COUNTER SOLUTION
 */


function areThereDuplicates(...n) {
    // initialize counter obj
    const counter = {}
    // add values of args to counter obj
    for (let char of n) {
        if (typeof n === 'string' && !(Number.isInteger(n))) {
            counter[char] = (n[char] || 0) + 1
        } else {
            counter[char] = Number(counter[char] ||0) + 1
        }
    }
    // loop through counter obj to find duplicates
    for (let check in counter) {
        // if duplicates are found return true,
        if (counter[check] > 1) {
            return true
        }

    }
    // if not return false
    return false
}

console.log(
    '\n',
    areThereDuplicates(1,2,3),
    '\n',
    areThereDuplicates(1,2,2),
    '\n',
    areThereDuplicates('a', 'b', 'c', 'a')
)