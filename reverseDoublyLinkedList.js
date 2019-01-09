// Reverse a doubly linked list, in place

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
    const node = new DoublyLinkedListNode(newVal);
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

  reverseList() {
    console.log('\nLIST PRIOR TO REVERSING:\n\n', this.head);

    let left = this.head;
    let right = this.tail;
    let current = 0;
    
    while (current < Math.floor(this.length / 2)) {
      // swap left and right values, increment left, decrement right
      [left.val, right.val] = [right.val, left.val];
      left = left.next;
      right = right.previous;
      current++;
    }

    return console.log('\nREVERSED LIST:\n\n', this.head);
  }
}

const myOddDLL = new DoublyLinkedList();
myOddDLL.addNode(1);
myOddDLL.addNode(2);
myOddDLL.addNode(3);
myOddDLL.addNode(4);
myOddDLL.addNode(5);
myOddDLL.reverseList();

const myEvenDLL = new DoublyLinkedList();
myEvenDLL.addNode(1);
myEvenDLL.addNode(2);
myEvenDLL.addNode(3);
myEvenDLL.addNode(4);
myEvenDLL.reverseList();