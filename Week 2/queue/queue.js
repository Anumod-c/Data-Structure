class Queue {
    constructor() {
        this.item = [];
    }
    enqueue(element) {
        this.item.push(element)
    }
    dequeue() {
        this.item.shift();
    }
    peek() {
        console.log(this.item[0])
    }
    display() {
        console.log(this.item.toString())
    }
    size() {
        return this.item.length;
    }
    isEmpty() {
        console.log(this.item.length === 0)
    }
}
const queue = new Queue();
queue.isEmpty()
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
queue.dequeue();
queue.display()
queue.peek();
console.log(queue.size())

