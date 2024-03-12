class Stack{
    constructor(){
        this.stack=[];
        this.minstack=[];
    }
    push(val){
        this.stack.push(val);
        if(this.minstack.length===0  || val<=this.getmin()){
            this.minstack.push(val)
        }
    }
    getmin(){
        return this.minstack[this.minstack.length-1]
    }
    pop(){
         let removed = this.stack.pop()
            if(removed===this.getmin()){
                this.minstack.pop()
            }
            return removed
        
    }
}
const stack =new Stack();
stack.push(12);
stack.push(3);
stack.push(4);
console.log(stack.getmin());
stack.pop();
console.log(stack.getmin());
