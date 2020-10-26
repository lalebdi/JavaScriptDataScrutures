// A graph is a set of values that are related in a pair wise fashion. Each item is called a node or a vertex. Nodes are connected with edges.
// They are great for representing real world relationships. Ideal for working with things that are connected to other things. 
// Types of Graphs:
// 1- Directed Vs. Undirected. 
// 2- Weighted Vss. Unweighted. Information in the edges, not just the nodes. 
// 3- Cyclic Vs. Acyclic. Connected or non-connected. 
// Many data structures create graphs. 
// Graphs can be build in 3 ways:
// 1- Edge List:
const graph1 = [ [0, 2], [2, 3], [2, 1], [1, 3] ];

// 2- Adjacent List: creating a graph where the index is the node and the value is the node neighbor. can be done with arrays or objects.

const graph2 = [ [2], [2, 3], [0, 1, 3], [1, 2]]

// 3- Adjacent Matrix: 0 & 1 to indicate wheteer the node is connected or not. Objects can be used as key-value.

const graph3 = [
    [0, 0, 1, 0], // -> node 0 is connected to  2
    [0, 0, 1, 1], // -> node 1 is connected to 2, 3
    [1, 1, 0, 1], // -> node 2 is connected to  0, 1, 3
    [0, 1, 1, 0] // -> node 3 is connected to  1, 2
]

const graphObj = {
    0 : [0, 0, 1, 0], // -> node 0 is connected to  2
    1 : [0, 0, 1, 1], // -> node 1 is connected to 2, 3
    2 : [1, 1, 0, 1], // -> node 2 is connected to  0, 1, 3
    3 : [0, 1, 1, 0] // -> node 3 is connected to  1, 2
}