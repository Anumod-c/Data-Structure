// prepend

class Node{
    constructor(value){
        this.value = value;
        this.next =null;
    }
}
class LinkedList{
    constructor(){
        this.size=0;
        this.head =null;
    }

    isEmpty(){
        return this.size===0
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head =node;
        }
        this.size++
    }
removeFromfront(){
    if(this.isEmpty()){
        return null
    }
    else{
        this.head= this.head.next;
        this.size--;
    }
}
append(value){

    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node;

        this.size++
    }
    else{
        let prev = this.head;
        while(prev.next!==null){
            prev = prev.next
        }
        prev.next= node
        this.size++
    }
}
removeFromLast(){
    if(this.isEmpty()){
        return console.log("its Empty")
    }
    else if(!this.head.next){
        this.head= null;
        this.size--
    }
    else{
        let prev  = this.head;
        while(prev.next.next){
            prev= prev.next;
        }
        prev.next =null;
        this.size--
    }
}

insert(value,index){
if(index < 0 || index> this.size){
    return 'invalid entry'
}
 if(index ===0){
    const node =new Node(value)
    
    if(this.isEmpty()){
        this.head=node;
        this.size++
    }
    else{
        node.next=this.head;
        this.head=node;
        this.size++
    }
}
else{
    const node =new Node(value)

    let prev = this.head;
    for(let i=0 ;i<index-1;i++){
        prev = prev.next
    }
    node.next= prev.next
    prev.next= node;
    this.size++
}
}
remove(index){
 if(index<0 || index> this.size){
    return console.log("error")
 }
    if(index===0){
        this.head =this.head.next;
        this.size--
    }
    else{
        let prev =this.head;
        for(let i = 0 ; i<index-1 ; i++){
            prev= prev.next;
            
        }
        prev.next = prev.next.next;
        this.size--
    }
}
removeValue(value){
    if(this.isEmpty()){
        return console.log("empty")
    }
    else if(this.head.value===value){

        this.head =null;
        this.size--
    }
    else{
        let prev =this.head;
        while(prev.next && prev.next.value!==value){
            prev= prev.next
        }
        prev.next= prev.next.next;
        this.size--
    }

}
reverse(){
let prev = null;
let curr =this.head;
while(curr){
    let next = curr.next;
    curr.next = prev;
    prev= curr;
    curr=next
}
this.head =prev;
  
}
search(value){
    if(this.isEmpty()){
        return console.log("Empty")
    }
    else{
        let curr =this.head;
        let i=0
        while(curr && curr.value!==value){
            curr = curr.next;
            i++
        }
        if(curr && curr.value===value){
            console.log(i)
        }
        else{
            console.log("not found")
        }

    }
}
print(){
        let curr = this.head;
        let listValues = '';
        if(this.isEmpty()){
            console.log("List is Empty")
        }
        else{
            while(curr){
                listValues += `${curr.value} `
                curr= curr.next;
            }
            console.log(listValues)
        }
    }
}
const list = new LinkedList();
list.prepend(1)
list.print()
list.prepend(12)
list.print()
list.prepend(1)
list.print()
list.removeFromfront()
list.print()
list.append(100)
list.append(345)
list.print()
list.removeFromLast()
list.print()
list.insert(22009,3)
list.insert(2000,4)
list.removeValue(22009)
list.print()
list.remove(1)
list.print()
list.reverse()
list.print()
list.search(12)
list.print()

