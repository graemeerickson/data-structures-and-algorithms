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
          current.next = node;
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
    const node = new DoublyLinkedListNode();
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
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
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
      return `${searchVal} found.`;
    } else if (searchVal < currentNode.leftChild) {
      return this.search(currentNode.leftChild, searchVal);
    } else {
      return this.search(currentNode.rightChild, searchVal);
    }
  }

  traversePreOrder(currentNode = this.root, preOrderTreeArr = []) {
    // root-left-right (roots before leaves)
    if (currentNode) {
      preOrderTreeArr.push(currentNode.val);
      preOrderTreeArr = this.traversePreOrder(currentNode.leftChild, preOrderTreeArr);
      preOrderTreeArr = this.traversePreOrder(currentNode.rightChild, preOrderTreeArr);
    }
    return preOrderTreeArr;
  }

  traverseInOrder(currentNode = this.root, inOrderTreeArr = []) {
    // left-root-right
    if (currentNode) {
      inOrderTreeArr = this.traverseInOrder(currentNode.leftChild, inOrderTreeArr);
      inOrderTreeArr.push(currentNode.val);
      inOrderTreeArr = this.traverseInOrder(currentNode.rightChild, inOrderTreeArr);
    }
    return inOrderTreeArr;
  }

  traversePostOrder(currentNode = this.root, postOrderTreeArr = []) {
    // right-left-root (leaves before roots)
    if (currentNode) {
      postOrderTreeArr = this.traversePostOrder(currentNode.rightChild, postOrderTreeArr);
      postOrderTreeArr = this.traversePostOrder(currentNode.leftChild, postOrderTreeArr);
      postOrderTreeArr.push(currentNode.val);
    }
    return postOrderTreeArr;
  }
}

module.exports = { Stack, Queue, SinglyLinkedList, DoublyLinkedList, BinarySearchTree };