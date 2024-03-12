class Stack{
    constructor(){
        this.item = [];
    }
    push(element){
        this.item.push(element)
    }
    pop(){
        return this.item.pop()
    }
    display(){
           console.log(this.item);
    }
    peek(){
        let result =Math.floor((this.item.length)/2)
       return  this.item[result]
    }
}
function palindrome(input){
    const stack = new Stack();
    for(let char of input){
        stack.push(char)
    }
    for(let char of input){
        if(char !==stack.pop()){
            return false
        }
    }

    return true
}
const stck = new Stack();
stck.push(5);
stck.push(4)
stck.push(3);
stck.display();
stck.pop();
stck.display()
console.log(stck.peek())
console.log(palindrome("malayalam"))