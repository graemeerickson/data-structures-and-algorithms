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
    const printedQueue = this.queue.reduce((str, next) => {
      return str += next += ' ';
    },'');

    return console.log(`Queue: ${printedQueue}`);
  }
}

const myQueue = new Queue();
myQueue.enqueue('graeme');
myQueue.printQueue();
myQueue.enqueue('erickson');
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();