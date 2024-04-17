/* 1) Design and Implement Linked list with below operations (using a oops concept)
	a) insert a node in a given position insert(node, pos)
	b) delete a node in a given position delete(node, pos)
	c) print all the elements in the Linked list
	d) append node at end
	e) prepend node at the front
	f) print all the nodes in the linked list.
	g) reverse order of the linked list (very Imp) */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data, pos) {
        const newNode = new Node(data);
        if (pos === 1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 1; i < pos - 1 && current != null; i++) {
            current = current.next;
        }
        if (current == null) {
            console.log("Position out of range");
            return;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    delete(pos) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        let temp = this.head;
        if (pos === 1) {
            this.head = temp.next;
            temp = null;
            return;
        }
        let prev = null;
        for (let i = 1; temp != null && i < pos; i++) {
            prev = temp;
            temp = temp.next;
        }
        if (temp == null) {
            console.log("Position out of range");
            return;
        }
        prev.next = temp.next;
        temp = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(current.data + " ");
            current = current.next;
        }
        process.stdout.write("\n");
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current !== null) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head = prev;
    }
}

// Example usage:
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(0);
ll.printList();  // Output: 0 1 2 3
ll.insert(5, 3);
ll.printList();  // Output: 0 1 5 2 3
ll.delete(2);
ll.printList();  // Output: 0 5 2 3
ll.reverse();
ll.printList();  // Output: 3 2 5 0
