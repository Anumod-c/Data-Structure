class circularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.currentLength = 0;
      this.rear = -1;
      this.front = -1;
    }
  
    isFull() {
      return this.currentLength === this.items.length; // Use items.length for capacity
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    enqueue(element) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.items.length;
        this.items[this.rear] = element;
        this.currentLength++;
        if (this.front === -1) {
          this.front = this.rear; // Handle first element case
        }
      } else {
        console.log("Queue overflow"); // Inform user of full queue
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue underflow"); // Inform user of empty queue
        return null; // Indicate failure to dequeue
      }
  
      const item = this.items[this.front];
      this.front = (this.front + 1) % this.items.length;
      this.currentLength--;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1; // Reset for empty queue
      }
      return item;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.front];
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
  
      let i = this.front;
      let str = "";
      while (i !== this.rear) { // Use while loop for clarity
        str += this.items[i] + " ";
        i = (i + 1) % this.items.length;
      }
      str += this.items[i];
      console.log(str);
    }
  }
  
const queue =new circularQueue(5);
console.log(queue.isEmpty())
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300);
queue.enqueue(400)
queue.enqueue(500)
queue.print()
queue.dequeue();
queue.enqueue(600);
queue.print()
