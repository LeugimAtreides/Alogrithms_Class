/**
 * 1. Understand the problem
 *  - Restate:
 *      - Write a process that takes two positive numbers and returns true if the two inputs have numbers that appear the same amount of times
 *  - Inputs:
 *      - Two positive integers
 *      - Edge cases don't matter for challenge
 *  - Output:
 *      - Boolean, true if digits appear same number of times, false if they don't
 *  - Can you reason how Input => Output?
 *      - Not yet
 *  - Data Points
 *      - converted input
 *      - placeholder objects for frequency counters
 *  
 * 2. Give Concrete Examples
 *  - examples provided below
 * 3. Break it down
 *  - see pseudocode in function
 * 4. Solve/Simplify
 * - see code in function
 * 5. Look back and refactor
 *  - Observations Post Solving:
 *      - Write observations after wrapping up solution
 */

function sameFrequency(x, y){
    // solve edge cases
    const isValid = (n) => {
        return Number.isSafeInteger(n)
    }
    
    if (!isValid(x) || !isValid(y)) {
        return null
    }

    // convert inputs from ints to strings
    const strX = x.toString()
    const strY = y.toString()

    console.log('strX', strX)

    console.log('strY', strY)

    // add freq counter objects
    const freqObjX = {}, freqObjY = {}

    // pass values from first input into first counter
    for (let digit of strX) {
        freqObjX[digit] = freqObjX[digit] ? Number(freqObjX[digit]) + 1 : 1
    }

    // pass values from second input into second counter
    for (let digit of strY) {
        freqObjY[digit] = freqObjY[digit] ? Number(freqObjY[digit]) + 1 : 1
    }

    console.log('counter 1', freqObjX, '\n')

    console.log('counter 2', freqObjY, '\n')


    // parse through first counter and check against second counter
    for (check in freqObjX) {
        // if digit doesn't exist return false
        if (!(freqObjY[check])) {
            return false
        }
        
        // if digit count doesn't match return false
        if (freqObjX[check] !== freqObjY[check]) {
            return false
        }

    }

    // return true if loop finishes uninterrupted
    return true
}

// console.log(sameFrequency(182, 281), '\n')

// console.log('\n', sameFrequency(34, 14), '\n')

console.log('\n', sameFrequency(3589578, 5879385), '\n');

// console.log(
//     '\n',
//     sameFrequency(22, 222)
// )