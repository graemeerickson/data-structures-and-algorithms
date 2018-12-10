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

  printStack() {
    const printedStack = this.stack.reduce((str, next) => {
      return str += next += ' ';
    },'');

    return console.log(`Stack: ${printedStack}`);
  }
}

const myStack = new Stack();
myStack.printStack();
myStack.push('graeme');
myStack.printStack();
myStack.push('erickson');
myStack.printStack();
myStack.pop();
myStack.printStack();