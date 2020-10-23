arr = [2,5,1,2,3,5,1,2,4]
// given the array on top. Return the first occuring number.

// arr = [2,1,1,2,3,5,1,2,4]

// arr = [2,3,4,5]


function firstRecurringCHaracter(input){
    for(let i = 0; i< input.length; i++){
        for (let j = i+1; j < input.length; j++){
            if(input[i] === input[j]){
                return input[i]
            }
        }
    }
    return undefined
}

//  this is O(n^2)

firstRecurringCHaracter(arr)


/*
iter = 0

for(let i = 0; i < arr.length ; i++){
    // console.log(arr[i])
    if (arr[iter] === arr[i + 1]){
        console.log(arr[i])
        return arr[i]
    } else {
        iter++
        // return undefined
    }
}
*/