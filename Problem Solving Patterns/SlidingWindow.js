/**
 * EXAMPLE
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
 */
function naiveMaxSubArraySum(arr, n) {
    // edge case for num is greater than the length of the array
    if (n > arr.length) {
        return null
    }
    // Account for array of all negative numbers, so starting at 0 doesn't help
    var max = -Infinity
    // create a loop that goes until almost end of array, it stops at the last place where sum could start
    for (let i = 0; i < arr.length - n + 1; i++) {
        temp = 0
        // second loop goes through the inner continous arrays and adds those numbers together
        for (let j = 0; j < n; j++) {
            temp += arr[i + j]
        }
        // if the temp sum is larger than the last max then update max. Since max is negative infinity the first result will always occur
        if (temp > max) {
            max = temp
        }
    }
    return max
}

console.log('NAIVE SOLUTIONS')

console.log(naiveMaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10

console.log(naiveMaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17

console.log(naiveMaxSubArraySum([4, 2, 1, 6, 2], 4)); // 13

console.log(naiveMaxSubArraySum([], 4)); // null

/**
 * Solution above is naive because its time complexity of O(n^2)
 */

console.log('REFACTORED SOLUTION')

function maxSubArraySum(arr, n) {
    // return null if arr.length = 0
    if (arr.length < n) {
        return null
    }
    // initialize two variables for a max sum and a temporary sum
    let maxSum = 0
    let tempSum = 0

    // create the first sum, sum first n digits and store in maxSum
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }

    // set the temporary sum holder equal to the first max we obtained
    tempSum = maxSum

    // start another loop from end of last loop to end of array
    for (let j = n; j < arr.length; j++){
        // For every iteration subtract the first value from the last "window" and add the last value from the new "window"
        tempSum = tempSum - arr[j - n] + arr[j]

        // set the maximum sum as whichever is higher
        maxSum = Math.max(maxSum, tempSum)
    }
    // return a value which will either be the first array sum or the highest possible value of the next iterations
    return maxSum
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)) // 17
console.log(maxSubArraySum([], 4)); // null
