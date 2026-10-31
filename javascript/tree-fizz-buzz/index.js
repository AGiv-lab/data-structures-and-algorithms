class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

function fizzBuzzValue(number) {
  if (number % 15 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return String(number);
}

function fizzBuzzTree(tree) {
  if (!tree || !tree.root) {
    return new KaryTree();
  }

  function convertNode(oldNode) {
  const newNode = new Node(fizzBuzzValue(oldNode.value));

  for (const oldChild of oldNode.children) {
  const newChild = convertNode(oldChild);
  newNode.children.push(newChild);
}

  return newNode;
}

const newRoot = convertNode(tree.root);
return new KaryTree(newRoot);
}

module.exports = {
  Node,
  KaryTree,
  fizzBuzzTree,
};