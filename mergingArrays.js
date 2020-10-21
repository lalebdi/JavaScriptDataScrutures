//  create a function that merges 2 sorted arrays.

function mergeArrays(arr1, arr2){
    merged = [...arr1, ...arr2]
    console.log(merged.sort())
}

mergeArrays([0, 3, 4, 31], [4, 6, 30])