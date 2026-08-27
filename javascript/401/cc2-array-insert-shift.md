# Array Insert Shift

## Challenge / Description

Write a function called `insertShiftArray` that takes an array and a value to be added. Without using built-in array methods, return a new array with the value added at the middle index.

### Examples

Input:

```text
[2, 4, 6, -8], 5
```

Output:

```text
[2, 4, 5, 6, -8]
```

Input:

```text
[42, 8, 15, 23, 42], 16
```

Output:

```text
[42, 8, 15, 16, 23, 42]
```

## Whiteboard Process

<!-- Add the Array Insert Shift whiteboard image here when it is available. -->

## Approach & Efficiency

Determine the insertion index by dividing the input array's length by two and rounding up. Create a new array, then traverse the input array without using built-in array methods. Copy each element into the new array, leaving space at the insertion index for the new value.

- Time: O(n), because each element in the input array is visited once.
- Space: O(n), because a new array is created to hold the original elements and the inserted value.

## Solution

`insertShiftArray` returns a new array with the supplied value at the middle index. For an odd-length input array, the value is inserted immediately after the original middle element. The input array remains unchanged.

Implementation and tests will be added separately.
