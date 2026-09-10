# Linked List Insertions

## Summary

This challenge extends the existing LinkedList class with methods to append a node and insert nodes before or after an existing node.

## Description

- `append(value)` adds a node to the end of the list. If the list is empty, the new node becomes the head.
- `insertBefore(value, newValue)` inserts a node containing `newValue` before the first node whose value strictly equals `value`.
- `insertAfter(value, newValue)` inserts a node containing `newValue` after the first node whose value strictly equals `value`.

Both `insertBefore` and `insertAfter` use only the first matching value and throw `Error('Value not found')` when the target does not exist.

## Whiteboard Process

![Linked List Insertions Whiteboard](./img/cc6-linked-list-insertions.png)

## Approach & Efficiency

- `append`: Traverse to the last node and link it to the new node. O(n) time and O(1) additional space.
- `insertBefore`: Track the current and previous nodes, then link the new node before the match. Update the head if needed. O(n) time and O(1) additional space.
- `insertAfter`: Find the matching node and link the new node between it and its next node. O(n) time and O(1) additional space.

Here, n is the number of nodes. Each method takes O(n) time in the worst case because it may traverse from the head to the target or end. Each method uses O(1) additional space because it uses only a constant number of references while traversing the list.

## Solution

The implementation extends the existing LinkedList class and is verified with Jest tests covering happy paths, missing target values, and duplicate target values.

[Linked List Implementation](../linked-list/index.js)

[Linked List Tests](../linked-list/__tests__/linked-list.test.js)
