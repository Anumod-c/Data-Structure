class Node{
    constructor(value){
        this.value =  value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.value = this.value
        this.size = 0
    }
    IsEmpty(){
        return this.size ===0
    }

    append(value){
        const node = new Node(value)
        if(this.IsEmpty()){
            this.head = node
        }
        else{
            let prev =this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print(){
        if(this.IsEmpty()){
            console.log("List is empty")
        }
        else{
           let  curr = this.head
            let listvalues = ""
            while(curr){
                listvalues += `${curr.value} `
                curr =curr.next
            }
            console.log(listvalues)
        }
    }
}
const list = new LinkedList();
list.print()
list.append(100)
list.append(200)
list.print()
list.append(230)
list.append(210)
list.print()