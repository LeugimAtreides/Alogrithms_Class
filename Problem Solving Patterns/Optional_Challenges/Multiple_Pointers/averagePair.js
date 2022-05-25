/**
 * AVERAGE PAIR
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 * 1. Understand the problem
 *  -Restate:
 *      - Given a sorted set of numbers, and an integer. Find pairs in the set of numbers whose average matches the given integer. The frequency of those pairings could be higher than one
 *  - Inputs:
 *      - Sorted array of ints
 *      - Int or Float representing an average
 *      - Don't worry about edge cases for type
 *  - Outputs: 
 *      - Return a boolean when there are pairs of numbers that match the condition
 *  - Solution from Inputs and Outputs
 *      - using multiple pointers that when looped through they return the average value and return boolean when conditions are met
 *  - Data Points
 *      - Pointer one
 *      - Loop containing pointer two
 * 2. Examples: See Below
 * 3. Break It Down: See code comments
 * 4. Solve/Simplify: See code below
 * 5. Refactor?
 *  - As of now, time complexity and space complexity are minimal so I don't know how to better refactor this at this time
 *  - Perhaps a candidate for Divide and Conquer approach which would make time complexity O(log n)
 */

function averagePair(arr = [], num = 0) {
    // initialize left pointer, initialize right pointer
    let left = 0, right = arr.length - 1
    // begin while condition, which will iterate as long as the left pointer is less than the right pointer
    while (left < right) {
        // inside while condition, initialize avg value between indices at left and right of array
        let avg = (arr[left] + arr[right]) / 2

        // if the value of avg === num then return true
        if (avg === num) return true;

        // if the value of avg is less than num increase left pointer
        else if (avg < num) left++;

        // else decrease right pointer
        else right--
    }

    // return false if conditions aren't met
    return false
}

console.log(
    '-------AVERAGE PAIR SOLUTIONS--------',
    '\n',
    averagePair([1,2,3], 2.5), 'Expected: TRUE',
    '\n',
    averagePair([1,3,3,5,6,7,10,12,19], 8), 'Expected: TRUE',
    '\n',
    averagePair([-1,0,3,4,5,6], 4.1), 'Expected: FALSE',
    '\n',
    averagePair([], 4), 'Expected: FALSE',
    '\n',
    '-----------------END-----------------'
)
