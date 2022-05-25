/**
 * RADIX SORT
 * 
 * Radix sort is a special sorting algorithm that works on lists of numbers
 * 
 * It never makes comparisons between elements, it is an integer sort
 * 
 * It exploits the fact that information about the size of a number is encoded in the number of digits
 * 
 * More digits means a bigger number, it's very fast for number sorting
 */

function radixSort(nums = []) {
    // Figure out how many digits the largest number has
    // loop from k = 0 to this largest number of digits
    // For each iteration of the loop:
    // create buckets for each digit (0 - 9)
    // place each number in the corresponding bucket based on its kth digit
    // Replace our existing array with values in our buckets starting with 0 and going up to 9

    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }

        nums = [].concat(...digitBuckets)
    }

    console.log('nums', nums)

    return nums

}

console.log(`
--------RADIX SORT-------
Expected '[1,2,3,4,5,6,7,8]' got '[${radixSort([5320, 243, 14050405, 832, 4, 7304, 64, 3, 392, 29394])}]'
-------------END-------------
`)


/**
 * GET DIGIT HELPER
 * 
 * In order to implement radix sort, it's helpful to buld a few helper functions first:
 * 
 * getDigit(num, place) - returns the digit in *num* at the given *place* value.
 * 
 * Has to look at digit reading from right to left
 */

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(`
--------RADIX SORT-------
Expected '2' got '${getDigit(12345, 0)}'
-------------END-------------
`)

/**
 * GET DIGIT NUMBER
 * 
 * Digit count helper allows us to get the number of digits that comprise a given number
 * 
 * Very important because it radix sort, sorts numbers based on digit count
 */

function digitCount(num) {
    if (num === 0) return 1
    return Math.ceil(Math.log10(Math.abs(num)))
}

console.log(`
--------RADIX DIGIT COUNT-------
Expected '3' got '${digitCount(-383)}'
-------------END-------------
`)


/**
 * MOST DIGITS
 * 
 * Given an array of numbers, returns the number of digits in the largest numbers in the list
 */

function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(digitCount(nums[i]), maxDigits)
    }
    return maxDigits
}

console.log(`
 --------RADIX MOST DIGITS-------
 Expected '4' got '${mostDigits([1234, 56, 7])}'

 Expected '5' got '${mostDigits([1, 1, 11111, 1])}'

 Expected '2' got '${mostDigits([12, 34, 56, 78])}'
 -------------END-------------
 `)

// Solo implementation of radix sort

function myDumbAss(nums = [0]) {
    const getDigit = (num, place) => Math.floor(Math.abs(num)/Math.pow(10, place)) % 10

    const digitCount = (num = 0) => num === 0 ? 1 : Math.ceil(Math.log10(num))

    const mostDigits = (arrNums) => {
        let maxCount = 0;
        for (let i = 0; i < arrNums.length; i++) {
            const element = digitCount(arrNums[i]);
            maxCount = Math.max(maxCount, element)
        }
        return maxCount
    }

    let maxDigitCount = mostDigits(nums)

    for(let k = 0; k < maxDigitCount; k++) {
        let buckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            const digit = getDigit(element, k)
            buckets[digit].push(element)
        }
        nums = [].concat(...buckets)
    }

    return nums
}

console.log(myDumbAss([23, 345, 5467, 12, 2345, 9852]))