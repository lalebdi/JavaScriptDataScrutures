// A hash function is a function that generates a value of fixed length for each input it gets. 

let user = {
    name: "Bella",
    age: 8,
    sass: true,
    bark: function(){
        console.log("Woof!")
    }
}

console.log(user.age) // O(1)

user.color = "Blond" //O(1)
console.log(user)


console.log(user.bark()) //O(1)

// When a collision happens, the items will be placed in a linked lists ->(separate chaining). That will change the time complexity to O(n).

// other way of resolving a collision is Open Addressing. 

// In Javascript, if you pass a key that is a string or a number it gets stringified. In ES6 there's Map and Sets

const a = new Map()

// the difference between a Map and an Object, a Map allows you to save any data type as a key. like functions and arrays. Map maintains insertion orders. 

const b = new Set()