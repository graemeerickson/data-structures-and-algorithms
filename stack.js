class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    return this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }
}

const myStack = new Stack();
console.log(myStack);
myStack.push('graeme');
console.log(myStack);
myStack.push('erickson');
console.log(myStack);
myStack.pop();
console.log(myStack);