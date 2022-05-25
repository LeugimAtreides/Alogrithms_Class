/**
 * NOTE: THIS PROBLEM CAN BE SOLVED WIH THE FREQUENCY COUNTER PATTERN OR THE MULTIPLE POINTERS PATTERN THIS FILE WILL CONTAIN THE MULTIPLE POINTERS SOLUTION
 */

function areThereDuplicates(...n) {
    // initialize pointer one
    let left = 0
    // initialize pointer two
    let right = n.length - 1
    // loop through from beginning updating curr value
    while (left < right) {
        if (n[left] === n[right]){
            return true
        } else {
            left++
            right--
        }
    }
    // return false if no duplicates
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