/**
 * EXAMPLE
 * NOTE DIVIDE AND CONQUER ONLY WORKS ON SORTED ARRAYS
 * Given a sorted array of integers, write a function search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1
 */

// Why is this naive when time complexity is O(n) (as in accepted as good usually)?
function naiveSearch(arr, val){
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

console.log('------NAIVE SOLUTIONS----------')

console.log(naiveSearch([1,2,3,4,5,6], 4)); // 3
console.log(naiveSearch([1,2,3,4,5,6], 6)); // 5
console.log(naiveSearch([1,2,3,4,5,6], 11)); // -1

// This way is better becasue the complexity is actually O(log n), why?

// NOTE: THIS WILL BE COVERED LATER IN THE COURSE
function search(arr, val){
    let min = 0
    let max = arr.length - 1

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)

        console.log('middle', middle)
        let currentElement = arr[middle]
        console.log('current element', currentElement)

        if (currentElement < val) {
            min = middle + 1
        } else if (currentElement > val) {
            max = middle - 1
        } else {
            return middle
        }
    }

    return -1
}

console.log('------REFACTORED SOLUTIONS----------')

console.log(search([1,2,3,4,5,6], 4)); // 3
console.log(search([1,2,3,4,5,6], 6)); // 5
console.log(search([1,2,3,4,5,6], 11)); // -1