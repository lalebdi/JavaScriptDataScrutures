//  create a function that merges 2 sorted arrays.

function mergeArrays(arr1, arr2){
    merged = [...arr1, ...arr2]
    console.log(merged.sort(function (a, b){
        return a- b;
    }))
}

mergeArrays([0, 3, 4, 31], [4, 6, 30])


// still work in progress