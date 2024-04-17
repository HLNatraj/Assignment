/* 4) Design and implement queues with below operations with array
	a) enqueue operation
	b) dequeue operation
	c) front operation
	d) tail operation */

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    tail() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Front element:", queue.front());  // Output: 1
console.log("Tail element:", queue.tail());  // Output: 3
console.log("Dequeued element:", queue.dequeue());  // Output: 1
console.log("Front element after dequeue:", queue.front());  // Output: 2
