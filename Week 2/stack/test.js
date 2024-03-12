class Node{
    constructor(value){
        this.value = value;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.top=null;
    }
    isEmpty(){
        return this.top===null
    }
    push(element){
        const node = new Node(element)
        node.next=this.top;
        this.top=node;
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return console.log("stack is alredy Empty");
        }
       this.top=this.top.next
       this.size--
       return this.top.value;
    }
    peek(){
        return this.top.value;
    }
    print(){
        let curr =this.top;
        while(curr){
            console.log(curr.value);
            curr=curr.next;
        }
    }
    findMiddle(){
        let slow=this.top;
        let fast=this.top;
        while(fast && fast.next){
            slow=slow.next;
            fast= fast.next.next;
        }
        return slow.value
    }
    
}
const stack = new Stack();
stack.pop();
stack.push(10);
stack.push(30);
stack.push(20);
stack.print()

console.log(stack.peek(),"peeeked");
stack.print()
console.log(stack.findMiddle(),"is the Middle element in the Stack");