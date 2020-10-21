// refrence types

// objects are the refrence types in JS.

// numbersm null, boolean, undefined and strings are primitive types.
// a refrence type, which is a non-primitive type, is defined by us, the programmer.  like objects and arrays


// context

// scope is created when it sees {} like in functions. 
// context tells you where we are within object
console.log(this)

// "this" -> what is the object environment we are at right now. 
function a(){
    console.log(this)
}

a()
// Below I'm creating a new value for "this":

const object4 = {
    a: function(){
        console.log(this)
    }
}

object4.a()

// instantiation
// instantiation is when you make a copy of an object and use the code. I personally like to think of it as representation. 

class Player {
    constructor(name, type){
        console.log('Player', this) // -> the output is Wizard because since we used "new" to create wizard objects, the complier refers to the wizard as this. 
        this.name = name;
        this.type= type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I am ${this.type}`)
    }

}

class Wizard extends Player {
    constructor(name, type){
        // any time we use extend we need to call the constructor of the parent class and pass whatever properties we want to pass to it.
        super(name, type)
        console.log('Wizard', this)
    }

        play() {
            console.log(` Yay I'm a ${this.type}`)
        }
}

const wizard1 = new Wizard('Shelby', 'Mustang');
const wizard2 = new Wizard('Brenda', 'Dark Magic');

wizard1.play()
wizard1.introduce()