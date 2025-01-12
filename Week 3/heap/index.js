class Heap{
    constructor(){
        this.heap=[]
        
    }
    
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(currentIndex){
        let ParentIndex= this.Parent(currentIndex);
        while(this.heap[ParentIndex]>this.heap[currentIndex] && currentIndex>0){
            this.swap(currentIndex,ParentIndex);
            currentIndex= ParentIndex;
            ParentIndex=this.Parent(currentIndex)
        }
    }
    Parent(index){
        return Math.floor((index-1)/2)
    }
    leftchild(index){
        return (index*2)+1
    }
    rightchild(index){
        return (index*2)+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    display(){
        console.log(this.heap);
    }
    peek(){
        return this.heap[0]
    }
  
    buildHeap(arr){
        this.heap=arr;
        for(let i= this.heap.length-1;i>=0;i--){
            this.shiftDown()
        }
    }
    remove(){
        this.swap(0,this.heap.length-1);
        this.heap.pop();
        this.shiftDown(0);
    }
    shiftDown(currentIndex){
        let endIndex =this.heap.length-1;
        let leftIndex=this.leftchild(currentIndex);
        while(leftIndex<= endIndex){
            let rightIndex=this.rightchild(currentIndex);
            let indexToShift   
            if(rightIndex<=endIndex && this.heap[leftIndex]<this.heap[rightIndex] ){
                indexToShift =leftIndex
            }
            else{
                indexToShift =rightIndex
            }
            if(this.heap[currentIndex]> this.heap[indexToShift]){
                this.swap(currentIndex,indexToShift);
                currentIndex=indexToShift;
                leftIndex=this.leftchild(currentIndex)
            }
            else{
              
                return
            }
        }
          
    }
    min(){
        return this.heap[0]
    }
    max(){
        return this.heap[this.heap.length-1]
    }
    middle(){
        return this.heap[Math.floor(this.heap.length)/2]
    }
    
    
}
let arr=[2,34,5,67,43,57,7]
const h= new Heap();
h.insert(100)
h.insert(20)
h.insert(30)
h.insert(1)
console.log(h.peek())
h.display()

console.log(h.leftchild(0))
console.log(h.rightchild(0))


h.display()
console.log(h.Parent(3 ))
console.log(h.min()," Smallest number in the heap")
console.log(h.max(),"Highest number in thhe heap");
console.log(h.middle(),"Midlle  elment in the heap");