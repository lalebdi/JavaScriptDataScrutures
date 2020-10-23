/* 
Given an array, return the first recurring character

arr = [2,5,1,2,3,5,1,2,4] 
returns 2

arr = [2,1,1,2,3,5,1,2,4]
returns 1

arr = [2,3,4,5]
returns undefined 
*/

function firstRecurringCharacter2 (input){
    let map = {}
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
        console.log(map)
    }
    return undefined
}

//  O(n) but increased the space complexity 

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4] )