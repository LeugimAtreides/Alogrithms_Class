/**
 * MAX SUB-ARRAY SUM
 * Given an array of integers and a number, write a function called maxSubArraySum, which finds the maximum sum of a subarray with the length of the number passed to the function
 * Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 * 1. Understand the problem
 *  - Restate:
 *      - Given an array of numbers and an int input, find the sequence of indices that have the greatest sum together for the length of the given int input
 *  - Inputs
 *      - First: Array of numbers
 *      - Second: Int
 *  - Output
 *      - Sum of the largest sub array
 *  - Input => Output?
 *      - Using sliding window approach we can iterate through a section of an array
 * - Data Points
 *      - Max Sum
 *      - Temp Sum
 *      - loop through arr
 * 2. Concrete Examples
 *      - See below
 * 3. Break It Down
 *      - See code comments
 * 4. Solve/Simplify
 *      - See code
 * 5. Refactor
 *      - ???
 */

function maxSubArraySum(arr = [], n = 0) {
    // Edge case for arr being shorter than n
    if (arr.length < n) return 0

    // init maxSum, letSum
    let maxSum = 0
    let tempSum = 0

    // create the first sum, sum first n digits and store in maxSum
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }

    // set the temporary sum holder equal to the first max we obtained
    tempSum = maxSum

    // next loop from end of last loop to end of array
    for (let j = n; j < arr.length; j++) {
        // for every iteration subtract the first value from the last 'window' and add the last value from the new 'window'
        tempSum = tempSum - arr[j - n] + arr[j]

        // set the maximum sum as whichever is higher
        maxSum = Math.max(maxSum, tempSum)
    }
    // return maxSum
    return maxSum
}

console.log(
    '\n',
    '-------MAX SUB ARRAY SUM SOLUTIONS--------',
    '\n',
    maxSubArraySum([100, 200, 300, 400], 2), '  Expected: 700',
    '\n',
    maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), '  Expected: 39',
    '\n',
    maxSubArraySum([-3, 4, 0, -2, 6, -1], 2), '  Expected: 5',
    '\n',
    maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), ' Expected: 5',
    '\n',
    '-----------------END-----------------'
)