'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  append(value) {
  const node = new Node(value);

  if (this.head === null) {
    this.head = node;
    return;
  }

  let current = this.head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = node;
}
  insertBefore(value, newValue) {
    let previous = null;
    let current = this.head;

    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current === null) {
      throw new Error('Value not found');
    }

    const node = new Node(newValue);
    node.next = current;

    if (previous === null) {
      this.head = node;
    } else {
      previous.next = node;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;

    while (current !== null && current.value !== value) {
      current = current.next;
    }

    if (current === null) {
      throw new Error('Value not found');
    }

    const node = new Node(newValue);
    node.next = current.next;
    current.next = node;
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    const parts = [];
    let current = this.head;
    while (current !== null) {
      parts.push(`{ ${current.value} }`);
      current = current.next;
    }
    parts.push('NULL');
    return parts.join(' -> ');
  }
}

module.exports = LinkedList;
