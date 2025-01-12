class Heap{
    constructor(){
        this.heap =[];
    }
    insert(value){
        this.heap.push(value);
        this.shiftup(this.heap.length-1)
    }
    remove(){
        this.swap(0,this.heap.length-1);
        this.heap.pop();
        this.shiftDown(0)
    }
    swap(index1,index2){
       return [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    peek(){
        return this.heap[0]
    }
    leftChild(index){
        return index*2 +1
    }
    rightChild(index){
        return index*2 +2
    }
    parent(index){
        return (index-1)/2
    }
    display(){
        console.log(this.heap);
    }
    shiftup(currentIndex){
        let parentIndex=this.parent(currentIndex);
        while(currentIndex>0 && this.heap[parentIndex]<this.heap[currentIndex]){
            this.swap(currentIndex,parentIndex);
            currentIndex=parentIndex;
            parentIndex =this.parent(currentIndex)
        }
        
    }
    shiftDown(currentIndex){
        let endIndex =this.heap.length-1;
        let leftIndex=this.leftChild(currentIndex)
        while(leftIndex<endIndex){
            let rightIndex= this.rightChild(currentIndex);
            let indexToShift
            if(rightIndex<endIndex && this.heap[leftIndex]<this.heap[rightIndex]){
                indexToShift=leftIndex
            }
            else{
                indexToShift=rightIndex
            }
            if(this.heap[currentIndex]>this.heap[indexToShift]){
                this.swap(currentIndex,indexToShift);
                currentIndex=indexToShift;
                leftIndex=this.leftChild(currentIndex)
            }
            else{
                return
            }
        }
        
    }
}
const h= new Heap();
h.insert(2)
h.insert(32)
h.insert(23)
h.insert(22)
h.insert(42)
h.insert(12)
h.insert(211)
h.display()
// h.remove()
h.display()
// h.remove()
h.display()
// h.remove()
h.display()
console.log(h.rightChild(0))