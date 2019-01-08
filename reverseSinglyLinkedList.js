// Reverse a singly linked list

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

  reverseList() {
    const reversedList = new SinglyLinkedList();
    const stack = [];
    
    let current = this.head;
    while (current) {
      stack.push(current.val);
      current = current.next;
    }

    while (stack.length) {
      reversedList.addNode(stack.pop());
    }

    return console.log(reversedList);
  }
}

const mySLL = new SinglyLinkedList();
mySLL.addNode(1);
mySLL.addNode(2);
mySLL.addNode(3);
mySLL.addNode(4);
mySLL.addNode(5);
mySLL.reverseList();