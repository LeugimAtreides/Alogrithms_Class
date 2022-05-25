/**
 * FIRST RECURSIVE FUNCTION
 * 1. Base Case
 *  - Where recursion ends
 * 2. Different Input
 *  - Each time a recursive function needs to be called with a different set of data
 */

function countDown(num) {

    // Base Case
    if (num <= 0) {
        console.log('All done');
        return;
    }
    console.log(num)
    num--;

    // Changing Input
    countDown(num)
}

countDown(10);