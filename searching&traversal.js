/*
main types:
1- Linear Search or Sequential Search: is a mehtod of finding a target value within a list. It sequentially checks each element in the list. 
2- Binary Search: A divide and conqure aproach. O(log n). You split a list of a sorted item and decide if the item is in the left or right by comparing things. 
3- Depth First Search:  it follows on branch of the tree down as many levels as possible until the target node is found or the end is reached. When the search can't go any further, it continues at the nearest ancestor with the unexplored child. It has a lower memory requirement than BFS becausee it dosen't to store all the child pointers at the level. Basically, go as deep as possible in the tree. 
4- Breadth First Search: You start with the root node, and move left to right across the second and then the thirds level. It uses additional memory because it tracks the child nodes of all the nodes of the given level. 
*/

// Traversal -> means going from node to node. O(n)

// Linear: O(n)
var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function(item){
    return item === 'Godzilla';
})

beasts.find(function(item){
    return item === 'Godzilla'
})

beasts.includes('Godzilla');


// BFS vs DFS:
// Both have O(n). 
// BFS -> good for the shortest path, and closer nodes. But, uses more memory (for child node tracking).
// DFS -> asks does the path exist. It uses less memory. Downside, its slow and doesn't find the shortest path. Uses recursions 

/*
BFS:

Time complexity is O(|V|), where |V| is the number of nodes. You need to traverse all nodes. 
Space complexity is O(|V|) as well - since at worst case you need to hold all vertices in the queue.

DFS:

Time complexity is again O(|V|), you need to traverse all nodes. 
Space complexity - depends on the implementation, a recursive implementation can have a O(h) space complexity [worst case], where h is the maximal depth of your tree. 
Using an iterative solution with a stack is actually the same as BFS, just using a stack instead of a queue - so you get both O(|V|) time and space complexity.
*/

// Quick questions for what to use:
// 1- If you know a solution is not far from the root of the tree -> BFS
// 2- If the tree is very deep and solutions are rare -> BFS (DFS will take a very long time)
// 3- If the tree is very wide -> DFS (BSF will need too much memory)
// 4- If solutions are frequent but located seep in the tree -> DFS
// 5- Determining whether a path exists between two nodes -> DFS (thats what it is built for)
// 6- Finding the shortes path: BFS

// To validate a BST, use BFS