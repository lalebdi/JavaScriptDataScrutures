// Creating undriected, unweighted using adjacency list using a hash table. 

/*

            3 --------------- 4 ------------------- 5
            |                 |                     |
            |                 |                     |
            |                 |                     |
            1 --------------- 2                     6
            \                 /
             \               /
              \             /
               \--- 0 -----/

*/

class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {}
    }

    addVertex(node){

    }

    addEdge( node1, node2 ){
        // Undirected Graph
    }

    showConnecttions(){
        const allNodes = Object.keys
        (this.adjacentList);

        for ( let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connetions ="";
            let vertex;
            for (vertex of nodeConnections) {
                econnections += vertex + " "
            }
            console.log(node + "-->" + connetions)
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');