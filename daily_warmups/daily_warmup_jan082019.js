/*
  Completed: Stack, queue, singly linked list, doubly linked list, binary search tree
  Did not complete: hash table, graph
*/

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    this.stack.pop();
  }

  print() {
    let printedStack = '';
    this.stack.forEach(item => printedStack += item + ' ');
    console.log(printedStack);
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(val) {
    this.queue.push(val);
  }

  dequeue() {
    this.queue.shift();
  }

  print() {
    let printedQueue = '';
    this.queue.forEach(item => printedQueue += item + ' ');
    console.log(printedQueue);
  }
}

class SinglyLinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(newVal) {
    const node = new SinglyLinkedListNode(newVal);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAfter(newVal, insertAfterNode) {
    let current = this.head;
    while (current) {
      if (current.val === insertAfterNode) {
        const node = new SinglyLinkedListNode(newVal);
        if (current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next = node;
          break;
        }
      }
      current = current.next;
    }
  }

  removeNode(valToRemove) {
    let previous = this.head;
    let current = this.head;
    while (current) {
      if (current.val === valToRemove) {
        if (current === this.head) {
          this.head = this.head.next;
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }

  print() {
    console.log(this);
  }
}

class DoublyLinkedListNode {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(newVal) {
    const node = new DoublyLinkedListNode(newVal)
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insertAfter(newVal, insertAfterNode) {
    let current = this.head;
    while (current) {
      if (current.val === insertAfterNode) {
        const node = new DoublyLinkedListNode(newVal);
        if (current === this.tail) {
          node.previous = this.tail;
          this.tail.next = node;
          this.tail = node;
        } else {
          node.previous = current;
          node.next = current.next;
          current.next.previous = node;
          current.next = node;
        }
        this.length++;
      }
      current = current.next;
    }
  }

  removeNode(valToRemove) {
    let current = this.head;
    while (current) {
      if (current.val === valToRemove) {
        if (current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        } else if (current === this.tail) {
          this.tail = current.previous;
          this.tail.next = null;
        } else {
          current.next.previous = current.previous;
          current.previous.next = current.next;
        }
        this.length--;
      }
      current = current.next;
    }
  }

  print() {
    console.log(this);
  }
}

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

  searchNode(searchVal) {
    return console.log(this.search(this.root, searchVal));
  }

  search(currentNode, searchVal) {
    if (!currentNode) return `${searchVal} not found.`;
    
    if (currentNode.val === searchVal) {
      return `Found ${searchVal}.`;
    } else if (searchVal < currentNode.val) {
      return this.search(currentNode.leftChild, searchVal);
    } else {
      return this.search(currentNode.rightChild, searchVal);
    }
  }

  traversePreOrder(currentNode = this.root, preOrderArr = []) {
    // root-left-right
    if (currentNode) {
      preOrderArr.push(currentNode.val);
      preOrderArr = this.traversePreOrder(currentNode.leftChild, preOrderArr);
      preOrderArr = this.traversePreOrder(currentNode.rightChild, preOrderArr);
    }
    return preOrderArr;
  }

  traverseInOrder(currentNode = this.root, inOrderArr = []) {
    // left-root-right
    if (currentNode) {
      inOrderArr = this.traverseInOrder(currentNode.leftChild, inOrderArr);
      inOrderArr.push(currentNode.val);
      inOrderArr = this.traverseInOrder(currentNode.rightChild, inOrderArr);

    }
    return inOrderArr;
  }

  traversePostOrder(currentNode = this.root, postOrderArr = []) {
    // left-right-root
    if (currentNode) {
      postOrderArr = this.traversePostOrder(currentNode.leftChild, postOrderArr);
      postOrderArr = this.traversePostOrder(currentNode.rightChild, postOrderArr);
      postOrderArr.push(currentNode.val);
    }
    return postOrderArr;
  }

  removeNode(valToRemove) {
    !this.root ? console.log(`Tree is empty.`) : this.remove(this.root, valToRemove)  // scenario 1
  }
  
  remove(currentNode, valToRemove) {
    /*
      6 scenarios:
        1. empty tree
        2. node not found
        3. leaf node - set parent.left/rightChild to null
        4. 1 child (left) - point parent.leftChild to current.leftChild
        5. 1 child (right) - point parent.rightChild to current.rightChild
        6. 2 children - find leftmost node in right subtree
    */
    let parentNode;
    while (currentNode && (currentNode.val !== valToRemove)) {
      parentNode = currentNode;
      if (valToRemove < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    // scenario 2 - node not found
    if (!currentNode) return console.log(`${valToRemove} not found.`);
    
    if (!currentNode.leftChild && !currentNode.rightChild) {
      // scenario 3 - leaf node
      if (currentNode.val < parentNode.val) {
        parentNode.leftChild = null;
      } else {
        parentNode.rightChild = null;
      }
      return true;
    } else if (!currentNode.rightChild) {
      // scenario 4 - 1 child (left)
      if (currentNode.leftChild.val < parentNode.val) {
        parentNode.leftChild = currentNode.leftChild;
      } else {
        parentNode.rightChild = currentNode.leftChild;
      }
      return true;
    } else if (!currentNode.leftChild) {
      // scenario 5 - 1 child (right)
      if (currentNode.rightChild.val < parentNode.val) {
        parentNode.leftChild = currentNode.rightChild;
      } else {
        parentNode.rightChild = currentNode.rightChild;
      }
      return true;
    } else {
      // scenario 6 - 2 children - find leftmost node in right subtree, swap with currentNode, then null out
      let minRight = currentNode.rightChild;
      while (minRight.leftChild) {
        minRight = minRight.leftChild;
      }
      this.remove(this.root, minRight.val);
      currentNode.val = minRight.val;
      return true;
    }
  }

  print() {
    console.log(this);
  }
}

module.exports = { Stack, Queue, SinglyLinkedList, DoublyLinkedList, BinarySearchTree };