/* 
3) Design and implement stack with below operations with your implemented linked list 
	a) push operation
	b) pop operation
	c) top operation */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.topNode = null;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.topNode;
        this.topNode = newNode;
    }

    pop() {
        if (!this.topNode) {
            return "Underflow";
        }
        const poppedItem = this.topNode.data;
        this.topNode = this.topNode.next;
        return poppedItem;
    }

    top() {
        if (!this.topNode) {
            return "Stack is empty";
        }
        return this.topNode.data;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Top element:", stack.top());  // Output: 3
console.log("Popped element:", stack.pop());  // Output: 3
console.log("Top element after pop:", stack.top());  // Output: 2
