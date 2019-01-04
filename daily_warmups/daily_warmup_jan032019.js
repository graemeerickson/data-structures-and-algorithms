/*
  Start time: 9:30pm
  End time: 11:30pm
  Completed: Stack, queue, singly linked list, doubly linked list, binary search tree (insertion)
  Did not complete: singly linked list (reversal), doubly linked list (reversal), binary search tree (removal, traversal), hash table, graph
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
    const printedQueue = this.queue.reduce((accum, item) => {
      return accum += item + ' ';
    }, '');
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
    console.log(this.head);
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
          node.previous = current;
          current.next = node;
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
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
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
    console.log(this.head)
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

  addNode(data) {
    const newNode = new BinarySearchTreeNode(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(currentNode, newNode) {
    if (newNode.data < currentNode.data) {
      !currentNode.left ? currentNode.left = newNode : this.insertNode(currentNode.left, newNode);
    } else {
      !currentNode.right ? currentNode.right = newNode : this.insertNode(currentNode.right, newNode);
    }
  }

  print() {
    console.log(this);
  }
}

module.exports = { Stack, Queue, SinglyLinkedList, DoublyLinkedList, BinarySearchTree };