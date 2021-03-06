
<p align="center">
  
    
 

  <h3 align="center">This is My Data Strcutures and Algorithms Repo</h3>

  <p align="center">
    A complete base!
    <br />
    
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
* [Contributing](#contributing)
* [Problem Solving](#problem-solving)


<!-- ABOUT THE PROJECT -->
## About The Project
The is a Data Structures and Algorithms repo. I've written plenty of comments to help you understand.



*  :smile:



<!-- GETTING STARTED -->
## Getting Started



Clone the repo
```sh
git clone https://github.com/lalebdi/JavaScriptDataScrutures.git
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- Problem Solving -->
## Problem Solving

Problem solving steps:<br>

1. Understand the problem:<br>
    Start with:<br>
        1- Can I restate the problem in my own words? (In your own words -> To make sure you understand what the question is.)<br>
            2- What are the inputs that go into the problem? <br>
                3- What are the outputs that should come from the solution to the problem?<br>
                    4- Can the outputs be determined from the inputs? Do I have enough info to solve the problem? <br>
                        5- How should I label the important pieces of the data that are a part of the problem?<br>

2. Concete Examples:<br>
  Coming up with examples can help you understand the problem. Examples also provide sanity checks that your solution works how it should. (User Stories or Unit Tests)
      *   Start with simple examples. 2 or 3 with an input and a output. Easiest use cases. 
      *      Progress to more complex examples.
      *          Explore examples with empty inputs. (edge cases)
      *              Explore examples with invalid inputs. 
  
3. Break It Down:<br>
     AKA Pseudo-code<br>
         Write the steps you will take.<br>

4. Solve or Simplify:<br>
    Simplify infers solving a simpler problem =><br>
        - Find the core of the difficulty in what you're trying to do.<br>
        -      Temporarily ignore that difficulty.<br>
        -           Write a simplified solution.<br>
        -               Then incorporate that difficulty back in.<br>
5. Look Back and Refactor:<br>
    ~ Can you check the result?<br>
        ~ Can you derive the result differently?<br>
            ~ Can you understand it at a glance?<br>
                ~ Can you use the result or method for some other problem?<br>
                    ~ Can you improve the performace of your solution?<br>
                        ~ can you think of other ways to refactor?<br>
                            ~ How have other people solved this problem?

Patterns:<br>
1. Frequency Counters:<br>
    This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested for loops "O(n^2)" operations with arrays/strings. 2 loops are better than nested loops. 
        => The idea is usually use an object to construct a profile to break down the contents of an array or string and compare that break down to another on how they look. 

2. Multiple Pointers:
    Creating pointers or values that correspond to an index or position and move towards the beginning, end or  towards each other middle based on a certain condition. Minimal space complexity. <br>
    This is used for strings, arrays or doubly linkedlists.<br>
    Usually used to find a pair. <br>

3. Sliding Window:<br>
    This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). This is useful for keeping track of a subset of data in an array or string.<br>
    i.e. finding a subset of the data.<br>

4. Divide and Conquer:<br>
    This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This is great for time complexity. Used in arrays, strings, linkedlist and tries.<br>
    So, you start in the middle and see if the value is less or more than the middle and repeat.<br>
