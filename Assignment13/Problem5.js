
/* 5) Design and implement queues with below operations with your implemented linked list 
	a) enqueue operation
	b) dequeue operation
	c) front operation
	d) tail operation */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.frontNode = null;
        this.rearNode = null;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (!this.frontNode) {
            this.frontNode = newNode;
            this.rearNode = newNode;
        } else {
            this.rearNode.next = newNode;
            this.rearNode = newNode;
        }
    }

    dequeue() {
        if (!this.frontNode) {
            return "Underflow";
        }
        const dequeuedItem = this.frontNode.data;
        if (this.frontNode === this.rearNode) {
            this.frontNode = null;
            this.rearNode = null;
        } else {
            this.frontNode = this.frontNode.next;
        }
        return dequeuedItem;
    }

    front() {
        if (!this.frontNode) {
            return "Queue is empty";
        }
        return this.frontNode.data;
    }

    tail() {
        if (!this.rearNode) {
            return "Queue is empty";
        }
        return this.rearNode.data;
    }

    isEmpty() {
        return this.frontNode === null;
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
