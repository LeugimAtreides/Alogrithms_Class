/**
 * INSERTION SORT
 * Similar to "Bubble" and "Selection"
 * Has key differences where it does better than both in certain situations
 * Builds up the sort by gradually creating a larger sorted portion of the array
 * Extremely slow on reverse sort
 * Good for online live data that is streaming live and needs to be sorted live because it can re-sort very quickly
 */

function insertionSort(arr) {
    // Start by picking second element in array
    for (let i = 1; i < arr.length; i++) {

        // set first element as the smallest element
        let curr = arr[i]

        // set variable equal to last position for loop
        let j = i - 1

        // loop through "sorted" part of array going from the var above to zero while the element was greater than the current value
        for (j; j >= 0 && arr[j] > curr; j--) {
            arr[j + 1] = arr[j]
        }

        // set the value of the next position of j to curr
        arr[j + 1] = curr
    }
    // repeat until array is sorted
    return arr
}

function swap(arr, i1, i2) {
    return [arr[i1], arr[i2]] = [arr[i2], [arr[i1]]]
}


console.log(`
--------INSERTION SORT-------
Expected '[5,15,19,38,44,47]' got '[${insertionSort([19, 44, 38, 5, 47, 15])}]'
-------------END-------------
`)