class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }

}
class Stack{
    constructor(){
        this.top=null;
        this.size=0
    }
    
push(element){
    const node = new Node(element);
    if(!this.top){
        this.top=node
    }
    else{

        node.next=this.top;
        this.top=node;
    }
    this.size++
}
pop(){
    if(!this.top){
        return null
    }
    let removed=this.top;
    this.top=this.top.next;
    return removed.value
}
peek(){
    return this.top.value;
}
isEmpty(){
    this.top===null
}
print(){
    let curr=this.top;
    while(curr){
        console.log(curr.value);
        curr=curr.next
    }
}
}
const stack= new  Stack();
stack.push(20);
stack.push(30);
stack.push(10);
stack.print()
stack.pop();
stack.print()
console.log(stack.peek())
