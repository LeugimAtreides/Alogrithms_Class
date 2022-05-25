// EXAMPLE ALGORITHM #1
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

/*
MULTIPLE POINTERS - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
    1. Understand the problem
        - Restate:
            find a way the number of times in a sorted array where a number is different than any of the other numbers
        - Input:
            Sorted Array (no need to worry about varied inputs)
        - Output:
            Integer showing number of time there is a unique value
        - Logic for Input => Output:
            Iterate through sorted arr with multiple pointer pattern to count number of times a unique value appears
        - Data Storage:
            reference for count
            reference for pointer one
            reference for pointer two
    2. Concrete examples
        - countUniqueValues([1,1,1,1,2])
            returns 2
        - countUniqueValues([])
            returns 0
        - countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
            returns 7
    3. Break it down
        - See comments inside function
    
    4. Solve/Simplify
        - See code inside function

    5. Look Back Refactor
        - What could be changed? is it optimal?
*/

function countUniqueValues(arr) {
    // return 0 if length of arr is 0
    if (arr.length === 0) {
        return 0
    }
    // set first pointer
    let i = 0

    // set loop going from second pointer to end of loop
    for (let j = 1; j < arr.length; j++) {
        // if values are diff then increase pointer one and set new value at i
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        // else do nothing
    }
    //return first pointer plus one
    return i + 1
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]))

// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))

// console.log(countUniqueValues([]))

function countUniqueValues2(arr){
    if (arr.length === 0) {
        return 0
    }

    let i = 0
    let j = 1

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        j++
    }

    return i + 1
}

console.log(countUniqueValues2([1, 1, 1, 1, 1, 1, 2]))

console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]))

console.log(countUniqueValues2([]))