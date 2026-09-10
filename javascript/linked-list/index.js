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
