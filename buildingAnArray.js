// In JavaScript arrays are objects with integer based keys. 

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++  // -> you want to increment the length becuase you added an element
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length -1]
        delete this.data[this.length -1]
        this.length--
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index); // this is created to use the single use principle
        return item;
    }

    shiftItems(index){
        for (let i = index; i < this.length -1 ; i++){
            this.data[i] = this.data[i+1] // -> shifting the data to left by 1 😀
        }
        delete this.data[this.length -1]
        this.length--
        // we are starting at the index that we want to delete, and loop through it to the end and take each item in the data and instead of the data we had before, add the data that is next to it. 
    }

}


const newArray = new MyArray();

console.log(newArray)
console.log(newArray.get(0)) // -> the output will be undefined because there's nothing there yet!!

newArray.push('Hi')
console.log(newArray)

newArray.push('Hi 2')
console.log(newArray)

newArray.push('Hi 3')
console.log(newArray)

newArray.push('Hi 4')
console.log(newArray)

newArray.pop()
console.log(newArray)

newArray.delete(1)
console.log(newArray)