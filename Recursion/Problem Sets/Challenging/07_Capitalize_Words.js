function capitalizeWords(strings) {
    // add whatever parameters you deem necessary - good luck!
    // init new array
    let newArr = []

    // init base case
    if (strings.length === 0) {
        return newArr
    }

    // init char variable to keep track of first item with uppercase
    let str = strings[0]

    str = str.toUpperCase()

    newArr.push(str)
    // concat to new array

    newArr = newArr.concat(capitalizeWords(strings.slice(1)))

    return newArr
}

let words = ['i', 'am', 'learning', 'recursion'];

console.log(
    '\n',
    capitalizeWords(words),
    '\n'
)