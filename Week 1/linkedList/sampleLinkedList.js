class Node{
    constructor(value){
        this.value= value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size=0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
} const list = new LinkedList()
console.log('is this  empty:',list.isEmpty())
console.log('size of the list:',list.getSize())