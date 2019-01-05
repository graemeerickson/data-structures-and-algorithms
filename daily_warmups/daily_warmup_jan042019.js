/*
  Completed: Stack, queue, singly linked list, doubly linked list, binary search tree
  Did not complete: binary search tree (removal), hash table, graph
*/

class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
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

  enqueue(data) {
    this.queue.push(data);
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
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const node = new SinglyLinkedListNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAfter(data, insertAfterNode) {
    let current = this.head;
    while (current) {
      if (current.data === insertAfterNode) {
        const node = new SinglyLinkedListNode(data);
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

  removeNode(data) {
    let previous = this.head;
    let current = this.head;
    while (current) {
      if (current.data === data) {
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
  constructor(data) {
    this.data = data;
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

  addNode(data) {
    const node = new DoublyLinkedListNode(data);
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

  insertAfter(data, insertAfterNode) {
    let current = this.head;
    while (current) {
      if (current.data === insertAfterNode) {
        const node = new DoublyLinkedListNode(data);
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

  removeNode(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
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
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
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

    if (newValue < currentNode.data) {
      currentNode.left = this.insert(currentNode.left, newValue);
    } else {
      currentNode.right = this.insert(currentNode.right, newValue);
    }
  }

  printPreOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      console.log(currentNode.data);
      this.printPreOrderTraversal(currentNode.left);
      this.printPreOrderTraversal(currentNode.right);
    }
  }

  printInOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.printInOrderTraversal(currentNode.left);
      console.log(currentNode.data);
      this.printInOrderTraversal(currentNode.right);
    }
  }

  printPostOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.printPostOrderTraversal(currentNode.left);
      this.printPostOrderTraversal(currentNode.right);
      console.log(currentNode.data);
    }
  }

  searchNode(value) {
    return this.search(this.root, value);
  }

  search(currentNode, value) {
    if (currentNode !== null) {
      if (currentNode.data === value) {
        return console.log(`'${value}' found:`, currentNode);
      } else if (value < currentNode.left) {
        return this.search(currentNode.left, value);
      } else {
        return this.search(currentNode.right, value);
      }
    } else {
      return console.log(`'${value}' not found.`);
    }
  }

  print() {
    console.log(this.root);
  }
}

module.exports = { Stack, Queue, SinglyLinkedList, DoublyLinkedList, BinarySearchTree };