class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    return this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }

  printQueue() {
    let str = '';
    this.queue.forEach(item => str += item += ' ');
    return console.log(`queue: ${str}`);
  }
}

const myQueue = new Queue();
myQueue.enqueue('graeme');
myQueue.printQueue();
myQueue.enqueue('erickson');
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();