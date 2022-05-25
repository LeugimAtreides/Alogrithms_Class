/**
 * LINEAR SEARCH
 * Moving at a set interval checking one item at a time
 */

// indexOf implementation

const arrExample = [10, 15, 20, 25, 30]

function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (n === arr[i]) return i;
    }
    return -1
}

console.log(
    '\n',
    linearSearch(arrExample, 15),
    '\n'
)