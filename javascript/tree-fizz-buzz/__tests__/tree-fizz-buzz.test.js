const { Node, KaryTree, fizzBuzzTree } = require('../index');

describe('FizzBuzz Tree', () => {
  test('converts 15 to FizzBuzz', () => {
    const originalTree = new KaryTree(new Node(15));

    const result = fizzBuzzTree(originalTree);

    expect(result.root.value).toBe('FizzBuzz');
  });

    test('converts 9 to Fizz', () => {
    const originalTree = new KaryTree(new Node(9));

    const result = fizzBuzzTree(originalTree);

    expect(result.root.value).toBe('Fizz');
  });

    test('converts 10 to Buzz', () => {
    const originalTree = new KaryTree(new Node(10));

    const result = fizzBuzzTree(originalTree);

    expect(result.root.value).toBe('Buzz');
  });

    test('converts 7 to string 7', () => {
    const originalTree = new KaryTree(new Node(7));

    const result = fizzBuzzTree(originalTree);

    expect(result.root.value).toBe('7');
  });

    test('converts parent and child nodes', () => {
    const root = new Node(15);
    root.children.push(new Node(3));
    root.children.push(new Node(5));

    const originalTree = new KaryTree(root);
    const result = fizzBuzzTree(originalTree);

    expect(result.root.value).toBe('FizzBuzz');
    expect(result.root.children[0].value).toBe('Fizz');
    expect(result.root.children[1].value).toBe('Buzz');
  });

    test('handles an empty tree', () => {

    const originalTree = new KaryTree();

    const result = fizzBuzzTree(originalTree);

    expect(result).toBeInstanceOf(KaryTree);
    expect(result.root).toBeNull();
  });
});