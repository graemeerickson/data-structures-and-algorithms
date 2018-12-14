/*
  Start time: 10:45am
  End time: 11:15am
  Completed: Stack, queue, singly linked list (partial)
  Did not complete: Singly linked list (reverse), doubley linked list, binary search tree, hash table, graph
*/


// STACK
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

  printStack() {
    const printedStack = this.stack.reduce((accum, item) => {
        return accum += item + ' ';
      }, '');

    console.log('Stack:', printedStack);
  }
}

const myStack = new Stack();
myStack.push('graeme');
myStack.push('erickson');
myStack.printStack();
myStack.pop();
myStack.printStack();


// QUEUE
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

  printQueue() {
    const printedQueue = this.queue.reduce((accum, item) => {
        return accum += item + ' ';
      }, '');

    console.log('Queue:', printedQueue);
  }
}

const myQueue = new Queue();
myQueue.enqueue('graeme');
myQueue.enqueue('erickson');
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();


// SINGLY LINKED LIST
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
    let previous = this.head;
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
        }
      } else {
        previous = current;
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

  printSinglyLinkedList() {
    let printedSLL = '';
    let current = this.head;
    while (current) {
      printedSLL += current.data + ' -> ';
      current = current.next;
    }

    console.log('Singly Linked List:', printedSLL + 'null');
  }
}

const mySLL = new SinglyLinkedList();
mySLL.addNode('graeme');
mySLL.addNode('elliott');
mySLL.addNode('erickson');
mySLL.insertAfter('nathaniel', 'elliott');
mySLL.printSinglyLinkedList();
mySLL.removeNode('graeme');
mySLL.printSinglyLinkedList();
mySLL.removeNode('nathaniel');
mySLL.printSinglyLinkedList();
mySLL.removeNode('erickson');
mySLL.printSinglyLinkedList();