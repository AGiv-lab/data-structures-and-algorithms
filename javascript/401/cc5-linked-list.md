# Code Challenge 5: Linked List Implementation

## Summary

Create a singly linked list from scratch using JavaScript.

## Description

The linked list contains a `Node` class and a `LinkedList` class.

Each Node stores:

- A `value`
- A `next` reference to the following Node

The LinkedList stores a `head` reference to the first Node. An empty linked list has a `head` value of `null`.

The LinkedList will provide these methods:

- `insert(value)`
- `includes(value)`
- `toString()`

## Whiteboard Process

![Linked List Whiteboard](./img/cc5-linked-list.png)

## Approach and Efficiency

Each `Node` stores its value and starts with `next` set to `null`. A new
`LinkedList` starts with `head` set to `null`.

- `insert(value)` creates a node, points its `next` to the current head, and
  updates the head to the new node. It returns nothing and takes O(1) time
  and O(1) additional space per insertion.
- `includes(value)` traverses from the head, comparing values with strict
  equality. It returns `true` on a match or `false` after reaching the end,
  including for an empty list. It takes O(n) time in the worst case and
  O(1) additional space.
- `toString()` traverses the list, collects each value as `{ value }`, appends
  `NULL`, and joins the parts with ` -> `. For example, it returns
  `{ a } -> { b } -> { c } -> NULL`; an empty list returns `NULL`.
  It takes O(n) time and O(n) additional space because it visits every node
  and builds an output containing every value.

Here, n is the number of nodes. The list itself uses O(n) storage.

## Solution

[View the linked-list implementation](../linked-list/index.js)

## Tests

[View the linked-list tests](../linked-list/__tests__/linked-list.test.js)
