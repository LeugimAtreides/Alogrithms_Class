/**
 * BUBBLE SORT
 * Not very efficient, and not widely used.
 * It's a sorting algorithm where the largest values bubble to the top one at a time
 * Has some optimizations that can be applied for nearly sorted items
 * Complexity normally 0(n^2), but possibly O(n) if nearly sorted
 */

function bubbleSort(arr) {
    // Start looping with a var called i the end of the array towards the beginning
    for (let i = arr.length; i > 0; i--) {
        // start an inner loop with a var called j from beginning until i - 1
        for (let j = 0; j < i - 1; j++) {
            // if arr[j] is greater than arr[j + 1], swap those two values
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }

    }
    // return sorted arr
    return arr
}

console.log(
    '\n',
    bubbleSort([29, 10, 14, 30, 37, 16, 18]),
    '\n',
    bubbleSort([5, 3, 4, 1, 2]),
    '\n'
)

// Optimized with no swaps
function bubbleSortOptimized(arr) {
    const swap = (arr, a, b) => {
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }
    let noSwaps
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            let a = arr[j], b = arr[j + 1]
            console.log(arr, a, b)
            if (a > b) {
                swap(arr, j, j + 1)
                noSwaps = false
            }
        }
        if (noSwaps) break;
    }
    return arr
}

console.log(
    '\n',
    bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]),
    '\n'
)