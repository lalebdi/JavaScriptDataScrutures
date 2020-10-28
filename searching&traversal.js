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