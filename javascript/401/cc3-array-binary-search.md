# Code Challenge 3: Array Binary Search


## Summary

Write a function called `BinarySearch` that searches for a value in a sorted array. The function returns the index of the matching value or `-1` when the value is not found.

## Description

Binary Search compares the search key to the middle element of a sorted array.

- If they match, return the middle index.
- If the search key is smaller, continue searching the left half.
- If the search key is larger, continue searching the right half.
- If no searchable elements remain, return `-1`.

The solution does not use built-in search methods.

## Whiteboard Process
![Binary Search Whiteboard](./img/array-binary-search.png) 

## Approach and Efficiency

The algorithm uses two variables, `left` and `right`, to track the portion of the array that still needs to be searched.

During each loop, it calculates the middle index and eliminates half of the remaining elements.

- **Time complexity:** `O(log n)` because the searchable area is divided in half during every loop.
- **Space complexity:** `O(1)` because the algorithm uses only a fixed number of variables.

## Algorithm

1. Set `left` to the first index of the array.
2. Set `right` to the last index of the array.
3. Continue while `left` is less than or equal to `right`.
4. Calculate the middle index.
5. If the middle value equals the search key, return the middle index.
6. If the middle value is smaller than the search key, move `left` past the middle index.
7. Otherwise, move `right` before the middle index.
8. Return `-1` if the search key is not found.

## Solution

```javascript
function BinarySearch(sortedArray, searchKey) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (sortedArray[middle] === searchKey) {
      return middle;
    }

    if (sortedArray[middle] < searchKey) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
```

## Examples

| Input | Output |
|---|---:|
| `[4, 8, 15, 16, 23, 42], 15` | `2` |
| `[-131, -82, 0, 27, 42, 68, 179], 42` | `4` |
| `[11, 22, 33, 44, 55, 66, 77], 90` | `-1` |
| `[1, 2, 3, 5, 6, 7], 4` | `-1` |

## Link to Code

This is a whiteboard-only challenge. The JavaScript implementation is included in the [Solution](#solution) section above.
