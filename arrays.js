const strings = ['a', 'b', 'c', 'd']
//  4*4 = 16 bytes if storage

console.log(strings[2]) // access O(1)

//  push
strings.push('e') //O(1)

console.log(strings)

// pop

strings.pop(); //O(1)

console.log(strings);

//  adding to the begnning

strings.unshift('x'); //O(n)

console.log(strings);

// Splice to add in the middle

strings.splice(2, 0, 'alien') // O(n)

console.log(strings)


// Static arrays are fixed in size
// Dynamic arrays allow us to copy and rebuild a new array in a new location with new memory. 