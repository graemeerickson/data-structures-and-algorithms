// Given the root node of a binary search tree, return the maximum integer value in the tree.

class BinarySearchTreeNode {
  constructor(val) {
    this.val = val;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNode(newVal) {
    !this.root ? this.root = new BinarySearchTreeNode(newVal) : this.insert(this.root, newVal);
  }

  insert(currentNode, newVal) {
    if (!currentNode) {
      return new BinarySearchTreeNode(newVal);
    }

    if (newVal < currentNode.val) {
      currentNode.leftChild = this.insert(currentNode.leftChild, newVal);
    } else {
      currentNode.rightChild = this.insert(currentNode.rightChild, newVal);
    }
  }

  getMax(currentNode = this.root) {
    if (!currentNode.rightChild) {
      return console.log(`Found max value: ${currentNode.val}`);
    }

    return this.getMax(currentNode.rightChild);
  }
}

const myBST = new BinarySearchTree();
myBST.addNode(50);
myBST.addNode(25);
myBST.addNode(75);
myBST.getMax();