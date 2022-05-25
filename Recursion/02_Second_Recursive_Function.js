/**
 * SECOND RECURSIVE FUNCTION
 * 
 */

function sumRange(num) {
    // BASE CASE
    if (num === 1) return 1;

    // RECURSIVE CALL WITH CHANGING INPUT
    return num + sumRange(num - 1);
}

sumRange(3)
    // return 3 + sumRange(2) = 6
        // return 2 + sumRange(1) = 3
            // return 1

sumRange(4)
    // return 4 + sumRange(3) = 10
        // return 3 + sumRange(2) = 6
            // return 2 + sumRange(1) = 3
                // return 1