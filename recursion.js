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