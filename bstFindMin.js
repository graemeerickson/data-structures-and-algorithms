// Given the root node of a binary search tree, return the minimum integer value in the tree.

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

  addNode(newValue) {
    !this.root ? this.root = new BinarySearchTreeNode(newValue) : this.insert(this.root, newValue);
  }

  insert(currentNode, newValue) {
    if (!currentNode) {
      return new BinarySearchTreeNode(newValue);
    }

    if (newValue < currentNode.val) {
      currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
    } else {
      currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
    }
  }

  getMin(currentNode = this.root) {
    if (!currentNode.leftChild) return console.log(`Minimum integer in BST: ${currentNode.val}`);

    return this.getMin(currentNode.leftChild);
  }
}

const myBST = new BinarySearchTree();
myBST.addNode(50);
myBST.addNode(25);
myBST.addNode(75);
myBST.getMin();