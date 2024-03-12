class reevrseStack{
    constructor(){
        this.stack=[]
        this.revrseStack=[]
    }

   push(element){
    this.stack.push(element);
   }

   reversed(){
    while(this.stack.length!==0){

        this.revrseStack.push(this.stack.pop())
    }
   }
   print(){
    console.log(this.revrseStack);
   }
}
const result=  new reevrseStack();
result.push(30)
result.push(40)
result.push(50)
result.push(60)
result.reversed()
result.print()


