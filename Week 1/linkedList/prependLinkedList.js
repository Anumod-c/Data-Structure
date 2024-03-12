class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }



  
  isEmpty() {
    return this.size === 0;
  }



  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head =node
    }
    else{
        node.next = this.head
        this.head = node
    }
    this.size++
  }

  print(){
    if(this.isEmpty()){
        console.log("List is empty")
    }
    else{

        let curr = this.head
        let listvalues = ''
        while(curr){
            listvalues += `${curr.value} `
            curr = curr.next
        }
        console.log(listvalues)
    }
  }
}
const list  =new LinkedList()
list.print()
list.prepend(123)
list.prepend(234)
list.print()
