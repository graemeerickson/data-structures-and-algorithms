const { Stack, Queue, SinglyLinkedList, DoublyLinkedList, BinarySearchTree } = require('./daily_warmup_jan082019');

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
  console.log(`\nTesting remove functionality on empty tree...`);
  myBST.removeNode(4);
  console.log(`\nPopulating BST with nodes...`);
  myBST.addNode(4);
  myBST.addNode(9);
  myBST.addNode(5);
  myBST.addNode(2);
  myBST.addNode(8);
  myBST.addNode(12);
  myBST.addNode(3);
  myBST.addNode(1);
  myBST.addNode(14);
  console.log(`\nPrinting BST using preorder traversal (root-left-right)...`);
  console.log(myBST.traversePreOrder());
  console.log(`\nPrinting BST using inorder traversal (left-root-right)...`);
  console.log(myBST.traverseInOrder());
  console.log(`\nPrinting BST using postorder traversal (left-right-root)...`);
  console.log(myBST.traversePostOrder());
  console.log(`\nSearching BST for '1000'...`);
  myBST.searchNode(1000);
  console.log(`\nSearching BST for '5'...`);
  myBST.searchNode(5);
  console.log(`\nAttempting to delete '100', which does not exist in the tree...`);
  myBST.removeNode(100);
  console.log(`\nDeleting '5', which is a leaf node (no children)...`);
  myBST.removeNode(5);
  console.log(`In-order print of tree after deleting '5':`, myBST.traverseInOrder());
  console.log(`\nDeleting '9', which has two children...`);
  myBST.removeNode(9);
  console.log(`In-order print of tree after deleting '9':`, myBST.traverseInOrder());
  console.log(`\nDeleting '4', which has one child (left)...`);
  myBST.removeNode(4);
  console.log(`In-order print of tree after deleting '4':`, myBST.traverseInOrder());
  console.log(`\nDeleting '12', which has one child (right)...`);
  myBST.removeNode(12);
  console.log(`In-order print of tree after deleting '12':`, myBST.traverseInOrder());
}

testStack();
testQueue();
testSinglyLinkedList();
testDoublyLinkedList();
testBinarySearchTree();