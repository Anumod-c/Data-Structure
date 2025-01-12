class TrieNode{
constructor(){
    this.children={};
    this.endNode=false
}
}
class Trie{
constructor(){
this.root = new TrieNode()
}

insert(word){
    let node = this.root;
    for(let i=0;i<word.length;i++){
         let char= word[i];
         if(!node.children[char]){
            node.children[char]= new TrieNode()
         }
         node =node.children[char]
    }
    node.endNode=true
}

search(word){
    let node = this.root;
    for(let i=0;i<word.length;i++){
        let char = word[i];
        if(!node.children[char]){
            return
        }
        node=node.children[char]
    }
    return node.endNode
}
}

const trie = new Trie();
trie.insert("anumod");
console.log(trie.search("anumod"));