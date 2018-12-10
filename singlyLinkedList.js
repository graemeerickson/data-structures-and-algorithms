class Node {
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
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
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
}

const mySLL = new SinglyLinkedList();
console.log('Newly constructed:', mySLL);
mySLL.addNode('graeme');
console.log('addNode(graeme):', mySLL);
mySLL.addNode('elliott');
console.log('addNode(elliott):', mySLL);
mySLL.insertAfter('nathaniel', 'elliott');
console.log('insertAfter(nathaniel, elliott):', mySLL);
mySLL.addNode('erickson');
console.log('addNode(erickson):', mySLL);
mySLL.removeNode('graeme');
console.log('removeNode(graeme):', mySLL);
mySLL.removeNode('nathaniel');
console.log('removeNode(nathaniel):', mySLL);
mySLL.removeNode('erickson');
console.log('removeNode(erickson):', mySLL);