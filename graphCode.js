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

