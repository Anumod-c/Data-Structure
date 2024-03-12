class Queue{
    constructor(){
        this.item ={}
        this.front=0;
        this.rear =0;
    }
    enqueue(element){
        this.item[this.rear]=element;
        this.rear++
    }
    dequeue(){
        const itemtoDelete = this.item[this.front] 
        delete this.item[this.front]
        this.front++
    }
    display(){
       console.log( this.item)
    }
    peek(){
        return this.item[this.front]
    }
    size(){
       return this.rear - this.front
    }
    isEmpty(){
       return this.rear-this.front===0
    }
}
const queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.display()
queue.dequeue();
queue.display()
console.log(queue.peek());
console.log(queue.size());
console.log(queue.isEmpty())