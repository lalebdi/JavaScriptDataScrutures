arr = [2,5,1,2,3,5,1,2,4]
// given the array on top. Return the first occuring number.

// arr = [2,1,1,2,3,5,1,2,4]

// arr = [2,3,4,5]

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