// Stacks can be built with arrays and linked lists.
// Queues are built with linked list for optimum performance.



class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode
        } else {
            const holdingPointer = this.top;
            this.top = newNode
            this.top.next = holdingPointer;
        }
        this.length++;
        return this
    }

    pop(){
        if (!this.top) {
            return null
        } 
        if ( this.top === this.bottom){
            this.bottom = null;
        }
        // const holdingPointer = this.top; // -> this is to refrence the top node
        this.top = this.top.next;
        this.length--;
        return this
    }

}

// const myStack = new Stack();
// myStack.push("Bella")
// myStack.push("Snowball")
// myStack.push("Maruysa")
// myStack.peek()
// console.log(myStack)
// myStack.pop()
// // myStack.pop()
// // myStack.pop()
// console.log(myStack)


//  Array Implementation



class Stack2{
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length-1]
    }

    push(value){
        this.array.push(value)
        return this
    }

    pop(){
        this.array.pop()
        return this
    }

}

const myStack2 = new Stack2();
myStack2.push("Bella")
myStack2.push("Snowball")
myStack2.push("Maruysa")
myStack2.peek()
console.log(myStack2)
myStack2.pop()
myStack2.pop()
myStack2.pop()
console.log(myStack2)