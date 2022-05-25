/**
 * Frequency Counter - validAnagram
 * Given two strings write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from the word iceman
 * 
 * 
 * 1. Understand the problem
 * Restate: implement function that takes two lowercase strings and shows that each has the same exact characters even if out of order
 * Inputs: two strings
 * Outputs: Boolean
 * Understand input => output: if the strings match then return true, if they don't then return false
 * Understand data points: strObj1, strObj2, return val
 * 
 * 2. Concrete Examples
 * validAnagram('iceman', 'cinema') // true
 * validAnagram('car', 'rat') // false
 * validAnagram('asfg', asfgh') // false
 * 
 * 3. Break problem down: shown in code comments inside function
 * 
 * 4. Solve/Simplify: shown in code inside function
 * 
 * 5. Look Back and Refactor: shown in code inside function
 */

// MY SOLUTION

function validAnagram(str1, str2) {
    // check if str1 length matches str2 length if not return false
    if (str1.length !== str2.length) {
        return false
    }
    // initialize objects to hold values for both strings
    const strObj1 = {}, strObj2 = {}
    // initialize loop that puts the first string char as a key and the number of times it appears as a value
    for (let char of str1) {
        strObj1[char] = (str1[char] || 0) + 1
    }
    // initialize loop that puts the second strings char as a key and the number of times it appears as a value
    for (let char of str2) {
        strObj2[char] = (str2[char] || 0) + 1
    }
    // initialize loop that checks if char in strObj1 is in strObj2
    for (check in strObj1) {
        // check that the char appears in both loops, if not return false
        if (!(strObj2[check])) return false
        // check that the char appears the correct number of times in both loops else return false
        if (strObj1[check] !== strObj2[check]) return false
    }

    // finalize result value if none of the conditions for falsy results are met
    return true
}

console.log('--------MY SOLUTIONS-------------')

console.log(validAnagram('anagram', 'nagaram')) // true

console.log(validAnagram('car', 'rat')) // false

console.log(validAnagram('awesome', 'awesom')) // false

console.log(validAnagram('cartoon', 'nortoca')) // true

// INSTRUCTOR SOLUTION
function instructorValidAnagram(first, second) {
    if (first.length !== second.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        const letter = first[i]

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < second.length; i++) {
        const letter = second[i]

        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true;
}

console.log('---------INSTRUCTOR SOLUTIONS-------------')

console.log(instructorValidAnagram('anagram', 'nagaram')) // true

console.log(instructorValidAnagram('car', 'rat')) // false

console.log(instructorValidAnagram('awesome', 'awesom')) // false

console.log(instructorValidAnagram('cartoon', 'nortoca')) // true