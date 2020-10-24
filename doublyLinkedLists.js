// A singley linked list has set of nodes. the nodes have 2 elements: the value of the data and a pointer .
// the fisrt node is called the head. The last node is called the tail. 
// the tail linked list is null terminated, which signifies that its the end of the list. 
// new nodes can be added to a linked list by resetting the pointers.
// to access a certain node in a linked list, you need to traverse the linked list until you find the node. 


//  Grabage collection = memory management

//  a pointer is a refrence to another place in memory, another node or another object. 

// creating an easy linked list 10 --> 5 --> 16

let simpleLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

class Node{
    constructor(value){
        this.value= value;
        this.next= null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value){ // O(1)
        let newNode = new Node(value);
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode
        this.length++
        return this; // -> the "this" refrences the class that gets instatiated.
    }

    prepend(value){ // O(1)
        let newHead = new Node(value)
        newHead.next = this.head
        this.head.prev = newHead
        this.head = newHead
        this.length++;
        return this;
    }

    printList(){
        const array = []
        let currentNode = this.head;
        while ( currentNode != null ){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        // console.log(array)
        return array;
    }

    insert(index, value) {
        // check params
        if(index >= this.length){
            return this.append(value);
        }

        let newNode = new Node(value)
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode
        this.length++
        return this.printList()
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        // check params
        const leader = this.traverseToIndex(index -1)
        const unwatedNode = leader.next;
        leader.next = unwatedNode.next;
        this.length--;
        return this.printList()
    }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
// console.log(myLinkedList)
myLinkedList.insert(1, 99)
myLinkedList.insert(200, 88)
console.log(myLinkedList)
// myLinkedList.remove(1)
// myLinkedList.printList()
// console.log(myLinkedList)