// / anytime you are asked a question in an interview about strings, turn it into an array.
// Strings are array 


// Create a function that reverses a string : ' Hi my name is Leah'

function reverse(str){

    if (!str || str.length < 2 || typeof str != 'string'){
        return 'something is wrong!!'
    }
    let reverseString = str.split('')
    // console.log(reverseString)
    let newString = reverseString.reverse()
    // console.log(reverseString)
    let backwards = newString.join('')
    console.log(backwards)
}

//  or

const revers2 = str => [...str].reverse().join('');



reverse("Hi my name is Leah")