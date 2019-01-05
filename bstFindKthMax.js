// Given a BST, retrieve the kth maximum value.

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
      currentNode = new BinarySearchTreeNode(newVal);
    } else if (newVal < currentNode.val) {
      currentNode.leftChild = this.insert(currentNode.leftChild, newVal);
    } else {
      currentNode.rightChild = this.insert(currentNode.rightChild, newVal);
    }

    return currentNode;
  }

  sortTree(currentNode, sortedTreeArr) {
    if (currentNode) {
      sortedTreeArr = this.sortTree(currentNode.leftChild, sortedTreeArr);
      sortedTreeArr.push(currentNode.val);
      sortedTreeArr = this.sortTree(currentNode.rightChild, sortedTreeArr);
    }
    return sortedTreeArr;
  }
  
  getKthMax(k) {
    console.log(`Retrieving kth (${k}) max value from tree...`);
    const sortedTreeArr = this.sortTree(this.root, []);
    if (sortedTreeArr.length - k >= 0) {
      return console.log(sortedTreeArr[sortedTreeArr.length - k])
    } else {
      return console.log(`Tree does not contain ${k} values`);
    }
  }
}

const myBST = new BinarySearchTree();
myBST.addNode(50);
myBST.addNode(25);
myBST.addNode(75);
myBST.addNode(100);
myBST.addNode(125);
myBST.getKthMax(3);