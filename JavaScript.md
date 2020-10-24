1- How JavaScript works?
2- Explain the difference asynchronous and synchronous in JavaSript?
3- Explain: JavaSript is a single-threaded language that can be non-blocking?


Each browser has a javascript engine, in chrome it is V8, that reads the code and executes it. 
The engine consists of 2 parts:
1. Memory Heap -> This is where the memory allocation happens. To allocate memory in the memory heap you just declare and assign a variable. Be aware of memory leaks, when you have unused memory just lying around filling a memory. That's why global variables are not liked. 
2. Call Stack -> This is where the code is read and executed. It tells you where you are in the program. The order of functions execution. from top to bottom. first in last out.
```
const one = () => {
    const two = () => {
        console.log('4')
    }
    two()
} 
one()
```

The call stack of the above function is '4' <- two() <- one()



=> Explain: JavaSript is a single-threaded language that can be non-blocking?

single-threaded mean it has one call stack.
why JavaScript is single-threaded? -> running code on a single thread can be easy if you don't have complicated scenarios. 

=> Explain the difference asynchronous and synchronous in JavaSript?
means line 1 gets executed then line 2 then line 3 
To create stack-overflow: use Recursion
```
function foo(){
    foo()
}

foo()
```

With synchronous tasks, a single large task will hold up the line. Asynchronous is like a behavior - it's predictable - :
``` 
console.log('1')
setTimeout(()=> {
    console.log('2')
}, 2000)
console.log('3')
```

In order for JavaScript to run we need more than the JavaScript engine. We need Javascript Run-Time Environment, which is part of the browser.  In the Javascript run-time environment there's the engine, web API, callback queue and event loop. Event loop checks if the call-stack is empty and if the callback queue is  anything pending. Web API consists of DOM(document), Ajax(XMLHttpRequest), and Timeout(setTimeout). Callback Queue consists of onClick, onLoad and onDone (event listeners). 

Synchronous -> don't do anything until the task is complete.
Asynchronous -> Other things are not dependent on the task to be complete.