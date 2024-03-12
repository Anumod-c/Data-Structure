class Node{
    constructor(value){
        this.value = value
        this.next= null;
    
    }
}
class LinkedList{
constructor(){
    this.head =null
    this.size = 0
}

isEmpty(){
    return this.size === 0
}

insert(value,index){
    const node = new Node(value)
    if(index<0 || index> this.size){
        return "invalid entry"
    }
    if(index ===0){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.size++ ;
        }
        else{
            node.next = this.head
            this.head = node
            this.size++ ;
        }

    }
    else{
        const node = new Node(value);
        let prev = this.head
        for (let i = 0; i< index-1;i++){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
    }

}
remove(index){
    if(index< 0 || index> this.size){
        return console.log("invald Entry")
    }
    if(index ===0){
        this.head = this.head.next
        this.size--
    }
    else{
    let prev = this.head
    for(let i = 0 ; i < index-1 ; i++)
    {
        prev = prev.next
    }
    prev.next = prev.next.next
    this.size--
    }

}
print(){
    let curr =this.head
    let listvalues = ''
    if(this.isEmpty()){
        console.log("the list is empty")
    }
    else{
      while(curr){
        listvalues += `${curr.value} `
        curr=curr.next
    }
    console.log(listvalues)
    }
}
}
let list = new LinkedList()
list.print()
list.insert(100,0)
list.print()
list.insert(10,1)
list.print()
list.insert(107,2)

list.print()
list.insert(500,2)
list.print()
list.remove(3)
list.print()
