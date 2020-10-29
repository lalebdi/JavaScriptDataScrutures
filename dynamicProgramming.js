// is a way to slove problems by breaking them down into a collection of subproblems and store their solutions. 
// Cashing is a way to store values so you can usethem later on. 

// memoization is a special kind of cacheing that involves caching the return value based on its params. If the params don't change then its memoized. So you don't have to calcuate again. 

// Use closures
function memoizedAddTo80 (){
    let cache = {};
    return function(n){
    if (n in cache){
        return cache[n];
    } else {
        console.log('Time');
        cache[n] = n + 80;
        return cache[n];
    }
}
}

const memoized = memoizedAddTo80()

console.log('1: ', memoized(5))
console.log('2: ', memoized(5))

// When to use Memoization:
//  1- Can be divided into subproblems. 
//  2- Recursive Solution. 