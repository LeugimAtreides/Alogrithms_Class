/**
 * QUICK SORT
 * 
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
 * 
 * Works by selecting a single element, and finding the index where the pivot should end up in the sorted array
 * 
 * Once the pivot is poisitioned appropriately, quick sort can be applied on either side of the pivot
 */

function quickSort(arr = [], left = 0, right = arr.length - 1) {
    // Call the pivot helper on the array
    // When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
    // Base case occurs when you consider a sub-array with less than 2 elements

    if (left < right) {
        let pivotIndex = pivot(arr, left, right)

        // left
        quickSort(arr, left, pivotIndex - 1)

        // right
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
 
}

console.log(`
--------QUICK SORT-------
Expected '[1,2,3,4,5,6,7,8]' got '[${quickSort([5, 2, 1, 8, 4, 7, 6, 3])}]'
-------------END-------------
`)

/** PIVOT HELPER 
 * 
 * In order to implement quick sort, its useful to first implement a function responsible for arranging elements in an array on either side of the pivot
 * 
 * Given an array, this helper function should designate an element as the pivot.
 * 
 * It should then rearrange elements in the array so that all the values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
 * 
 * The order of elements on either side of the pivot doesn't matter.
 * 
 * The helper should do this *in place*, that is, that it should not create a new array.
 * 
 * When complete, the helper should return the index of the pivot
 * 
 * Picking a Pivot
 *  - The runtime of quick sort depends in part on how one selects the pivot
 *  - Ideally, the pivot should be chosen so that it's roughly the median value in the data set that you're sorting
 *  - For simplicity, this example will always choose the first element of the array as the pivot point
*/

// accept 3 args, arr, start, end
function pivot(arr = [], start = 0, end = arr.length + 1) {
    // grab the pivot from start
    // store current pivot index in a variable
    let swapIndex = start, pivot = arr[start]

    // loop through array
    for (let i = start + 1; i <= end; i++) {
        let element = arr[i]
        // if pivot is greater than current element increment the pivot index variable and then swap the current element with the element at the pivot index
        if (pivot > element) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }

    // Swap the starting element(i.e. the pivot) with the pivot index
    swap(arr, start, swapIndex)

    // Return the pivot index
    return swapIndex

}

function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    return array[j] = temp
}

console.log(`
--------PIVOT HELPER-------
Expected '4' got '${pivot([5, 2, 1, 8, 4, 7, 6, 3])}'
Expected '3' got '${pivot([4, 8, 2, 1, 5, 7, 6, 3])}'
-------------END-------------
`)