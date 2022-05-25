/**
 * MERGE SORT
 * Created in 1948 by Jonathan Van Neuman
 * Combination of two things - merging and sorting
 * Exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by decomposing an aray into smaller arrays of 0 or 1 elements, then building up a newly sorted array
 */

function mergeSort(arr = []) {
    // Break up the array into halves until you have arrays that are empty or have one element
    // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
    // Once the array has been merged back together, return the merged (and sorted!) array
    if (arr.length <= 1) return arr
    let midPoint = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, midPoint)), right = mergeSort(arr.slice(midPoint))

    return merge(left, right)
}

console.log(`
--------MERGE SORT-------
Expected '[5,15,19,38,44,47]' got '[${mergeSort ([19, 44, 38, 5, 47, 15])}]'
-------------END-------------
`)

/**
 * MERGING FUNCTION
 * In order to implement its useful to first a function responsible for merging two sorted arrays
 * Given two arrays which are sorted, this helper function should create a new array which is also sorted and consists of all of the elements in the two input arrays
 * This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
 */

function merge(arr1 = [], arr2 = []) {
    // Create an empty array and pointers for array position
    let mergedArr = [], i = 0, j = 0

    // use while loop that loops for the length of the longest array
    while (i < arr1.length || j < arr2.length) {

        // Set up break case for when one or both arrays run out
        if (i === arr1.length || j === arr2.length) {

            // variable 'end' checks the length of the remaining arrays and returns an array of the last remaining values
            const end = arr1.slice(i).length > arr2.slice(j).length ? arr1.slice(i) : arr2.slice(j)

            // push end into merged arr and finish the loop
            mergedArr.push(...end)
            break
        }

        // if the value of the first array is smaller than the value of the second array then push that value into our mergedArr and increase the position of the first array
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            mergedArr.push(arr2[j])
            j++
        }
    }

    // return the final merged array
    return mergedArr
}


console.log(`
 --------MERGE FUNC-------
 Expected '[1,2,3,4,5,6,7,8,9,10,11]' got '[${merge([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10])}]'
 Expected '[1,2,3,4,5,6,7,8,9,10,11]' got '[${merge([1, 10, 50], [2, 14, 99, 100])}]'
 -------------END-------------
 `)