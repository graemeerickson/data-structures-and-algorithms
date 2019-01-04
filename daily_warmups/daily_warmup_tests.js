const { Stack, Queue, SinglyLinkedList, DoublyLinkedList, BinarySearchTree } = require('./daily_warmup_jan032019');

const testStack = () => {
  console.log('STACK:');
  const myStack = new Stack();
  myStack.push('graeme');
  myStack.push('erickson');
  myStack.print();
  myStack.pop();
  myStack.print();
}

const testQueue = () => {
  console.log('\nQUEUE:');
  const myQueue = new Queue();
  myQueue.enqueue('graeme');
  myQueue.enqueue('erickson');
  myQueue.print();
  myQueue.dequeue();
  myQueue.print();
}

const testSinglyLinkedList = () => {
  console.log('\nSINGLY LINKED LIST:');
  const mySLL = new SinglyLinkedList();
  mySLL.addNode('graeme');
  mySLL.addNode('elliott');
  mySLL.addNode('erickson');
  mySLL.insertAfter('nathaniel', 'elliott');
  mySLL.print();
  mySLL.removeNode('graeme');
  mySLL.print();
  mySLL.removeNode('nathaniel');
  mySLL.print();
  mySLL.removeNode('erickson');
  mySLL.print();
}

const testDoublyLinkedList = () => {
  console.log('\nDOUBLY LINKED LIST:');
  const myDLL = new DoublyLinkedList();
  myDLL.addNode('graeme');
  myDLL.addNode('elliott');
  myDLL.addNode('erickson');
  myDLL.insertAfter('nathaniel', 'elliott');
  myDLL.print();
  myDLL.removeNode('graeme');
  myDLL.print();
  myDLL.removeNode('nathaniel');
  myDLL.print();
  myDLL.removeNode('erickson');
  myDLL.print();
}

const testBinarySearchTree = () => {
  console.log('\nBINARY SEARCH TREE:');
  const myBST = new BinarySearchTree();
  myBST.addNode(50);
  myBST.print();
  myBST.addNode(25);
  myBST.print();
  myBST.addNode(75);
  myBST.print();
}

testStack();
testQueue();
testSinglyLinkedList();
testDoublyLinkedList();
testBinarySearchTree();