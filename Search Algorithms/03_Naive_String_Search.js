/**
 * NAIVE STRING SEARCH
 * Suppose you want to count the number of times a smaller string appears in a long string
 */

const exStr = 'wowomgzomg', exSubStr = 'omg'

function naiveStringSearch(str, substr) {
    // Loop over longer string
    let count = 0
    for (let i = 0; i < str.length; i++) {
        // loop over shorter string
        for (let j = 0; j < substr.length; j++) {
            console.log(str[i + j], substr[j])
            // if the characters don't match, break out of the inner loop,
            if (substr[j] !== str[i + j]) {
                console.log('BREAK')
                break;
            }

            // if inner loop completes and match is found, increment the count of matches
            if (j === substr.length - 1) {
                // if the chars do match, keep going
                console.log('Found One!')
                count++
            }
        }
    }
    return count
}

console.log(
    '\n',
    naiveStringSearch(exStr, exSubStr),
    '\n'
)