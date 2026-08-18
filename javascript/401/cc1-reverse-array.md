<!-- 401 Whiteboard Process -->

# Challenge Title
<--Reverse an Array -->

## Whiteboard Process
Write a function called `reverseArray` that accepts an array as an argument and returns an array containing the same elements in reverse order.

Do not use built-in array methods such as `reverse()`.

### Example

**Input:**

```js
[1, 2, 3, 4]

![Whiteboard Process ](img/)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->


### **Approach Explanation**

*Start at the final index of the input array and move backward toward index 0.

**During each loop iteration, copy the current element into a new output array. When the loop reaches the beginning of the input array, return the completed output array.**

*This approach does not use the built-in reverse() method and does not modify the original input array.*


**The Big-O**


*Time Complexity:* O(n)
Every element in the input array is visited once.

*Space Complexity:*O(n)
A new array is created containing the same number of elements as the input array.

## Solution
<!-- Show how to run your code, and examples of it in action -->
The completed algorithm, pseudocode, JavaScript function, and example walkthrough are shown in the whiteboard above.

<## Solution
The function should produce results such as:

*-javascript*

reverseArray([1, 2, 3, 4]);
// [4, 3, 2, 1]

reverseArray(["a", "b", "c"]);
// ["c", "b", "a"]

reverseArray([]);
// []

![Array Reverse whiteboard](./array-reverse-whiteboard.png) -->

- [ ] Top-level README “Table of Contents” is updated
- [ ] README for this challenge is complete
       - [ ] Summary, Description, Approach & Efficiency, Solution
       - [ ] Picture of whiteboard
       - [ ] Link to code
- [ ] Feature tasks for this challenge are completed
- [ ] Unit tests written and passing
       - [ ] “Happy Path” - Expected outcome
       - [ ] Expected failure
       - [ ] Edge Case (if applicable/obvious)

<!----------------------------------------------------------------------------->
