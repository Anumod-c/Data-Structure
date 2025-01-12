class trieNode{
    constructor(){
        this.children={};
        this.endNode =false
    }
}
class trie{
    constructor(){
        this.root=new trieNode()
    }
    insert(word){
        let node =this.root;
        for(let i=0;i<word.length;i++){
            let char=word[i];
            if(!node.children[char]){
                node.children[char]=new trieNode()
            }
            node =node.children[char]
        }
        node.endNode=true
    }
    search(word){
        let node=this.root;
        for(let i=0;i<word.length;i++){
            let char =word[i];
            if(!node.children[char]){
                return
            }
            node=node.children[char]
        }
        return node.endNode
    }

    prefix(word){
        let node =this.root;
        for(let i=0;i<word.length;i++){
            let char = word[i];
            if(!node.children[char]){
                return false;
            }
            node =node.children[char]
        }
        return true
    }
    display(){
        const word =[];
        const displayHelper=(node,currentWord)=>{
            if(node.endNode){
                word.push(currentWord)
            }
            for (let char in node.children) {
                displayHelper(node.children[char], currentWord + char);
            }
        }
       displayHelper(this.root,'');
        console.log(word);
    }
}

const t =new trie()
t.insert("anumod");
t.insert("malu");
t.insert("ponn");
t.insert("anumodh");
t.insert("anu");
t.insert("ponnu");
t.insert("malavika");




console.log(t.search("anu"));
console.log(t.prefix("anum"));
t.display()