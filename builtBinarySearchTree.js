class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true){
                if (value < currentNode.value){
                    // goes left
                    if (!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left // -> shifting the pointer here to the left node below the root.
                } else {
                    // goes right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if (!this.root){
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value){ // -> if the value is less than the currentNode. value that means its not the same So go left.
                currentNode = currentNode.left;
            } else if (value > currentNode.value){
                currentNode = currentNode.right;
            } else if (currentNode.value == value) {
                return currentNode;
            }
        }
        return false; // -> if you don't find anything return false
    } 

    
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(9))
console.log(tree.lookup(15))





function traverse(node){
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}