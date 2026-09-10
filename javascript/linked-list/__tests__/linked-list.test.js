'use strict';

const LinkedList = require('../index');

describe('Linked List', () => {
  it('creates an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('inserts one node with a value and a null next reference', () => {
    const list = new LinkedList();
    expect(list.insert('a')).toBeUndefined();
    expect(list.head.value).toBe('a');
    expect(list.head.next).toBeNull();
  });

  it('points the head to the first node after each insertion', () => {
    const list = new LinkedList();
    list.insert('a');
    const originalHead = list.head;
    list.insert('b');
    expect(list.head.value).toBe('b');
    expect(list.head.next).toBe(originalHead);
  });

  it('inserts multiple nodes in reverse insertion order', () => {
    const list = new LinkedList();
    list.insert('c');
    list.insert('b');
    list.insert('a');
    expect(list.head.value).toBe('a');
    expect(list.head.next.value).toBe('b');
    expect(list.head.next.next.value).toBe('c');
    expect(list.head.next.next.next).toBeNull();
  });

  it('returns true for values at the head, middle, and tail', () => {
    const list = new LinkedList();
    list.insert('c');
    list.insert('b');
    list.insert('a');
    expect(list.includes('a')).toBe(true);
    expect(list.includes('b')).toBe(true);
    expect(list.includes('c')).toBe(true);
  });

  it('returns false for a value absent from a populated list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    expect(list.includes('c')).toBe(false);
  });

  it('returns the exact string format for multiple nodes', () => {
    const list = new LinkedList();
    list.insert('c');
    list.insert('b');
    list.insert('a');
    expect(list.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });

  it('returns false when searching an empty list', () => {
    const list = new LinkedList();
    expect(list.includes('a')).toBe(false);
    expect(list.includes(null)).toBe(false);
    expect(list.includes(undefined)).toBe(false);
    expect(list.head).toBeNull();
  });

  it('returns NULL for an empty list', () => {
    const list = new LinkedList();
    expect(list.toString()).toBe('NULL');
    expect(list.head).toBeNull();
  });

  it('returns the exact string format for one node', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.toString()).toBe('{ a } -> NULL');
  });

  it('finds falsy stored values using strict equality', () => {
    const list = new LinkedList();
    list.insert(0);
    list.insert(false);
    list.insert('');
    list.insert(null);
    list.insert(undefined);
    expect(list.includes(0)).toBe(true);
    expect(list.includes(false)).toBe(true);
    expect(list.includes('')).toBe(true);
    expect(list.includes(null)).toBe(true);
    expect(list.includes(undefined)).toBe(true);
    expect(list.includes('0')).toBe(false);
  });
});
