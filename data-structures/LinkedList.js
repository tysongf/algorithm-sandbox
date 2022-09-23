class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   push(val) {
      let node = new Node(val);
      if (!this.head) {
         this.head = node;
         this.tail = this.head;
      } else {
         this.tail.next = node;
         this.tail = node;
      }
      this.length++;
      return this;
   }

   pop() {
      if (!this.head) return undefined;
      let trailingNode = this.head;
      let currentNode = this.head;
      while (currentNode.next) {
         trailingNode = currentNode;
         currentNode = currentNode.next;
      }
      this.tail = trailingNode;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
         this.tail = this.head = null;
      }
      return this;
   }

   shift() {
      if (!this.head) return undefined;
      let shiftedNode = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
         this.tail = this.head = null;
      }
      return shiftedNode;
   }

   traverse() {
      let current = this.head;
      while (current) {
         console.log(current.val);
         current = current.next;
      }
   }
}

const myList = new LinkedList();
myList.push("Hello");
myList.push("World");
myList.push("!");
myList.push("Pop Me!");
myList.pop();
myList.shift();
console.log(myList);
myList.traverse();
