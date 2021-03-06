// when you define something in terms of itself. Simply,  Its a function that refers to itself in the function. e.g:
function inception(){
    inception();
};

// Its good for tasks that have repeated subtasks to do. 
// used in searching and sorting. 
// A possible problem with recursion is the memory allocation that could lead to stack-overflow and it is heard to stop. 

// Every recursive function needs to have a base case (a stop point)

// the 3 rules to build a recursive funtion:
// 1- Identify the base case. -> when to stop
// 2- Identify the recursive case.
// 3- Get closer and closer and return when needed. Usually you have 2 returns for the base case and the return base.

// Recursion has exponential time complexity O(2^n) most of the time.

// It is recommended to use recursion when working with data structures that we're not sure how deep they are or how many loops we have to go through.

// It is useful in tree data structures and  doing traversal.

// Everytime you are using a tree or converting something into a tree, consider a recursion.
//  1- Divided into a number of subproblems that are smaller instances of the sa,e problem.
//  2- Each instance of the subproblem is identical in nature.
//  3- The colutions of each subproblem can be combined to solve the problem at hand.
