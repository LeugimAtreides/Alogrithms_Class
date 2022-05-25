/**
 * MIN SUB-ARRAY LENGTH
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return the minimal length of a contigous subarray of which the sum is greate than or equal to the integer passed to the function. if there isn't one then return 0 instead.
 * 1. Understand the problem
 *  - Restate:
 *      - Given an array of positive integers, and a positive integer return the length of the shortest possible sub array where the sum is higher or equal to the positive integer input
 *  - Inputs
 *      - unsorted array
 *      - positive integer
 * - Outputs
 *      - Integer representing array length
 *  - Data points
 *      - integer representing min length
 *      - integer representing temp length
 * 2. Concrete Examples: See Below
 * 3. Break It Down: See code comments
 * 4. Solve/Simplify: See code
 * 5. Refactor
 *  - ???
 */

function minSubArrayLen(nums = [], sum = 0) {
    // init pointers for start position, end position, total, and minimum length
    let start = 0, end = 0, total = 0, minLen = Infinity

    // init a while loop that runs as long as the start position is less than the length of nums
    while (start < nums.length) {

        // check if the total is less than the sum, and the end position is less than the length of nums
        if (total < sum && end < nums.length) {

            // if true, add end position to total and increase the end position
            total += nums[end]
            end++

        // else check if total is greater than or equal to sum
        } else if (total >= sum) {
            
            // if true, set the min length from the lowest value between the current min length and the size of the window
            minLen = Math.min(minLen, end - start)

            // delete the first position value from the beginning of sums
            total -= nums[start]

            // increase the start value
            start++


        // else break the loop
        } else break

    }

    // return value
    return minLen === Infinity ? 0 : minLen
}

console.log(
    '\n',
    '-------MIN SUB ARRAY LENGTH SOLUTIONS--------',
    '\n',
    minSubArrayLen([2, 3, 1, 2, 4, 3], 7), '  Expected: 2',
    '\n',
    minSubArrayLen([2, 1, 6, 5, 4], 9), '  Expected: 2',
    '\n',
    minSubArrayLen([3, 7, 11, , 2, 9, 8, 21, 62, 33, 19], 52), '  Expected: 1',
    '\n',
    minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), ' Expected: 5',
    '\n',
    '-----------------END-----------------'
)