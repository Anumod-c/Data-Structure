class QueueStack{
    constructor(){
        this.q1=[];
        this.q2=[];
    }
    push(val){
        this.q1.push(val);
        while(this.q2.length>0){
            this.q1.push(this.q2.shift())
        }
        [this.q1,this.q2]= [this.q2,this.q1]
    }
    pop(){
        this.q2.shift()
    }
    print(){
        return this.q2
    }
}
const qstck= new QueueStack();
qstck.push(10)
qstck.push(20)
qstck.push(30);
console.log(qstck.print());
qstck.pop()
console.log(qstck.print());
