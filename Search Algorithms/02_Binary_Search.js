/**
 * BINARY SEARCH
 * Can be a significant improvement on linear search
 * Faster form of search
 * Only works on sorted arrays
 * Picks a halfway point, and checks is value greater than or less than the mid-point
 * Uses Divide and Conquer Pattern
 */

const sortedArr = Array(100)

function binarySearch(arr, elem) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1
        else start = middle + 1
    }
}

console.log(
    '\n',
    binarySearch(sortedArr, 24),
    '\n'
)