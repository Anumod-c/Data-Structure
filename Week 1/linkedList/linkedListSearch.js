class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
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
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.size++
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
      this.size++;
    }
  }
  search(value){
    if(this.isEmpty()){
        return console.log("List is Empty");
    }
    else{
        let i =0;
        let curr =this.head
        while(curr && curr.value !== value){
            curr = curr.next;
            i++
        }
        if(curr && curr.value === value){
            console.log(i)
        }
        else{
            console.log("Couldnt find")
        }
    }
  }
  print() {
    let curr = this.head;
    let listvalues = "";
    while (curr) {
      listvalues+= `${curr.value} `;
      curr = curr.next;
    }
    console.log(listvalues)
}
}
const list = new LinkedList()
list.print()
list.append(12)
list.print()
list.append(32)
list.append(45)
list.print()
list.search(0)
console.log(list.size)