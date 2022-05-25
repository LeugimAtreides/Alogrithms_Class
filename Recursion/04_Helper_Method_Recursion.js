/**
 * HELPER METHOD RECURSION
 * Outer function which is non-recursive calling a function inside that is recursive
 */

function collectOdds(arr) {
    let result = []

    function helper(helperInput) {
        // BASE CASE    
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        
        // RECURSIVE CALL WITH CHANGING ELEMENT
        helper(helperInput.slice(1))
    }

    helper(arr)

    return result
}

console.log(collectOdds([1,2,3,4,5]))
    // result = [], helper([1,2,3,4,5])
        // 1 % 2 !== 0, result = [1], helper([2,3,4,5])
            // 2 % 2 === 0, result = [1], helper([3,4,5])
                // 3 % 2 !== 0, result = [1,3], helper([4,5])
                    // 4 % 2 === 0, result = [1,3], helper([5])
                        // 5 % 2 !== 0, result = [1,3,5], helper([])
                            // return [1, 3, 5]

function collectOddsPure(arr) {
    let newArr = []

    // BASE CASE
    if (arr.length === 0) {
        return newArr
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    // RECURSIVE CALL WITH CHANGING ELEMENT
    newArr = newArr.concat(collectOddsPure(arr.slice(1)))

    return newArr
}

console.log(collectOddsPure([1,2,3,4,5]))
  // newArr = [], 1 % 2 !== 0, newArr = [1], newArr = newArr.concat(collectOddsPure([2,3,4,5,6]))
    // newArr = [], 2 % 2 == 0, newArr = [], newArr = newArr.concat(collectOdds([3,4,5]))
