/* 2) Design and implement stack with below operations with array
	a) push operation
	b) pop operation
	c) top operation
 */

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
        
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    top() {
        if (this.items.length === 0) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Top element:", stack.top());  // Output: 3
console.log("Popped element:", stack.pop());  // Output: 3
console.log("Top element after pop:", stack.top());  // Output: 2
