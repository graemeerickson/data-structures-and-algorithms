const { Stack, Queue, SinglyLinkedList, DoublyLinkedList, BinarySearchTree } = require('./daily_warmup_jan052019');

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
  console.log(`\nPopulating list with 'graeme', 'elliott', and 'erickson' nodes...\n`);
  mySLL.addNode('graeme');
  mySLL.addNode('elliott');
  mySLL.addNode('erickson');
  mySLL.print();
  console.log(`\nCalling insertAfter to insert 'nathaniel' between 'elliott' and 'erickson'...\n`);
  mySLL.insertAfter('nathaniel', 'elliott');
  mySLL.print();
  console.log(`\nRemoving node 'graeme' from the head of the list...\n`);
  mySLL.removeNode('graeme');
  mySLL.print();
  console.log(`\nRemoving node 'nathaniel' from the middle of the list...\n`);
  mySLL.removeNode('nathaniel');
  mySLL.print();
  console.log(`\nRemoving node 'erickson' from the tail of the list...\n`);
  mySLL.removeNode('erickson');
  mySLL.print();
}

const testDoublyLinkedList = () => {
  console.log('\nDOUBLY LINKED LIST:');
  const myDLL = new DoublyLinkedList();
  console.log(`\nPopulating list with 'graeme', 'elliott', and 'erickson' nodes...\n`);
  myDLL.addNode('graeme');
  myDLL.addNode('elliott');
  myDLL.addNode('erickson');
  myDLL.print();
  console.log(`\nCalling insertAfter to insert 'nathaniel' between 'elliott' and 'erickson'...\n`);
  myDLL.insertAfter('nathaniel', 'elliott');
  myDLL.print();
  console.log(`\nRemoving node 'graeme' from the head of the list...\n`);
  myDLL.removeNode('graeme');
  myDLL.print();
  console.log(`\nRemoving node 'nathaniel' from the middle of the list...\n`);
  myDLL.removeNode('nathaniel');
  myDLL.print();
  console.log(`\nRemoving node 'erickson' from the tail of the list...\n`);
  myDLL.removeNode('erickson');
  myDLL.print();
}

const testBinarySearchTree = () => {
  console.log('\nBINARY SEARCH TREE:');
  const myBST = new BinarySearchTree();
  console.log(`\nPopulating BST with values: 50, 25, 75...\n`);
  myBST.addNode(50);
  myBST.addNode(25);
  myBST.addNode(75);
  myBST.addNode(0);
  myBST.addNode(100);
  console.log(`\nPrinting BST using preorder traversal (root, left, right)...\n`);
  console.log(myBST.printPreOrderTraversal());
  console.log(`\nPrinting BST using inorder traversal (left, root, right)...\n`);
  console.log(myBST.printInOrderTraversal());
  console.log(`\nPrinting BST using postorder traversal (left, right, root - i.e., children before parents)...\n`);
  console.log(myBST.printPostOrderTraversal());
  console.log(`\nSearching BST for '1000'...\n`);
  myBST.searchNode(1000);
  console.log(`\nSearching BST for '75'...\n`);
  myBST.searchNode(75);
}

testStack();
testQueue();
testSinglyLinkedList();
testDoublyLinkedList();
testBinarySearchTree();