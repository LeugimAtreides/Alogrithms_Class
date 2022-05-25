/**
 * SELECTION SORT
 * Similar to bubble sort, but instead of placing large values into sorted position, it places small values into sorted positions
 * Time complexity for Selection Sort is usually O(n^2) unless array is already sorted
 * Potentially better than sorted if you want to minimize number of swaps
 */

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        // Store the first element as the smallest value you've seen so far.
        let smallest = i;

        for (let j = i + 1; j < arr.length; j++) {
            console.log(i, j)

            // Compare this item to the next item in the array until you find a smaller number.
            if (arr[j] < arr[smallest]) {

                // If a smaller number is found, designate the smaller number to be the new "minimum" and continue until the end of the array.
                smallest = j
            }
        }
        if (i !== smallest) {

            // if the "minimum" is not the value(index) you initially began with, swap the two values.
            swap(arr, i, smallest)
        }

    }
    // Repeat this with the next element until the array is sorted.
    return arr


}

function swap(arr, i1, i2) {
    return [arr[i1], arr[i2]] = [arr[i2], [arr[i1]]]
}

// console.log(
//     '\n',
//     'SELECTION SORT EXAMPLES',
//     '\n',
//     selectionSort([19, 44, 38, 5, 47, 15]),
//     '\n'
// )
console.log(`
--------SELECTION SORT-------
Expected '[5,15,19,38,44,47]' got '[${selectionSort([19, 44, 38, 5, 47, 15])}]'
-------------END-------------
`)