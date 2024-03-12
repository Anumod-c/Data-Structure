class Queue{
    constructor(){
        this.item={};
        this.rear=0;
        this.front=0;
    }
    enqueue(element){
        this.item[this.rear]=element;
        this.rear++
    }
    dequeue(){
      delete  this.item[this.front];
      this.front++
    }
    print(){
        console.log(this.item);
    }
    peek(){
        return this.item[this.front]
    }
}
const queue =new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.peek())

