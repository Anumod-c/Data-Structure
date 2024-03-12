class HashTabe{
    constructor(size){
        this.table=new Array(size);
        this.size=size
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index =this.hash(key);
        const bucket= this.table[index];
        if(!bucket){
            this.table[index]=[[key,value]]
        }
        else{
            let sameKeyItem = bucket.find(item=>item[0]===key)
                if(sameKeyItem){
                    this.table[index]=value
                }
                else{
                    bucket.push([key,value])
                }
            
        }
    }
    get(key){
        let index =this.hash(key);
        let bucket =this.table[index];
        if(bucket){
            let sameKeyItem =bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
            return undefined
        }
    }

    remove(key){
        let index = this.hash(key);
        let bucket=this.table[index];
        if(bucket){
            let sameKeyItem =bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){

                console.log(this.table[i])
            }
        }
    }
}
const table = new HashTabe(50);
table.set("name","Anumod");
table.set("age",22)
table.set("sex","male")
table.set("mane","c")
// table.print()
table.remove("name")
table.print()
console.log(table.get("sex"))