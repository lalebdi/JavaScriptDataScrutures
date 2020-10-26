/*
Rules:
1- Each node can have 0, 1, or 2 nodes.
2- each child can have one parent.
*/

// Creating a  simple binary tree

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

//  Perfect Binary Tree will have 2 nodes for each node and the leaves are full. 1- The number of total nodes on each level doubles as we move down the tree. 2- The number of node in the last level is equal to the sum of number of nodes +1. -> so we have half of the data on the bottom level.  (It is highly efficient -> O(log N))
// a Full Binary Tree will have 0 or 2 nodes for each node no single node is present.


// to find the number of nodes = 2^h - 1; Where h is hieght and starts at 1. 

// One of the advantages of binary trees over hash tables is that in binary tree the data have relationships. In hash tables there no relationship between the data. 

/*
Some rules for Binary search trees:
1- all child nodes to the right of the root node must be greater than the root node. 
2- A node can have up to 2 children.
*/


// Unbalanced binary search tree has:
// 1- look up -> O(n)
// 2- Insert -> O(n)
// 3- Delete -> O(n)
// why it bad? -> You lowered the time complexity.

//  Binary Search Trees have better time complexity, ordered and is size-flexiable. However, there are no O(1) operations. 

// AVL Tree and Red Black Tree are slef balancing Binary Search Trees