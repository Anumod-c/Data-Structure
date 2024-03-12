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
   reverse()
   {
    let prev= null
    let curr = this.head
    while(curr){
      
      let  next = curr.next
        curr.next = prev
        prev = curr
        curr =next
    }
    this.head = prev
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
  list.append(32)
  list.append(45)
  list.print()
  list.reverse()
  list.print()

  console.log(list.size)