// The main Comparison sorting algorithms I will discuss are:
// 1- Bubble Slrot.          Elementery Sorts. nested for loops 
// 2- Insertion Sort.       Elementery Sorts. nested for loops 
// 3- Selection Sort,        Elementery Sorts. nested for loops 
// 4- Merge Sort.           Divide & conquer
// 5- Quick Sort.           Divide & conquer

// 1- Bubble Sort: -> has a time complexity O(n^2). Works by bubbling up the large element. 

// 2- Selection sort: Works by scanning for the smallest element and swapping the element for the one in the first poisiton.  Time complexity -> O(n^2). Space Complexity -> O(1) doesn't use additional data.

// 3- Insertion sort: is useful is good when the list is sorted. When the list is sorted you almost get o(n). Works by comparing elements and inserting the small elemsnt to the begnning of the list. Performs well with small data sets. 

// 4- Merge Sort: Works by dividing the list into single elements and then compare then to each other. After, you combine them while compareing. One of the most efficient sorting algorithms. It uses recursion. It is stable - if confronted with similar elements, it will keep the original order of the elements- .  Has space complexity 0f O(n). Time complexity O(n log n).

// 5- Quick Sort: O(n log n). It uses a pivting technique, breaking a big list into smaller lists. These smaller list use the piviting auntil the list is sorted. The pivit selection is random. Space complexity O(log n). It is usually the fastest on average. 

// Which sort is the best?
// 1- Insertion sort: used with only few items, input is small, or the elements are somewhat sorted. It uses very little space and easy to implement.
// 2- bubble sort: its used for educational purposes.
// 3- Selection: mostly used as teaching mechinisim.
// 4- Merge: it is good because of divide & conqure. It uses space O(n).
// 5- Quick: most popular but if you don't pick the pivot properly, you will have a very slow sort. 

/*
A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted. Some sorting algorithms are stable by nature like Insertion sort, Merge Sort, Bubble Sort, etc. And some sorting algorithms are not, like Heap Sort, Quick Sort, etc.
*/

// Non comparison sorts are: -> only work with numbers in a limited range. 
// 1. Counting Sort.
// 2. Radix Sort. 