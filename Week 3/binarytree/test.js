class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}
class BinarySearchTree{
    constructor(){
        this.root =null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root==null){
            this.root=newNode;
        }
        else{
            this.InsertNode(this.root,newNode)
        }
    }
    InsertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode;
            }
            else{
                this.InsertNode(root.left,newNode)
            }
        }
        else{
            if(root.right===null){
                root.right=newNode
            }
            else{
                this.InsertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
   if(!root){
    return false
   }
   else if(value===root.value){
    return true
   }
   else if(value<root.value){
    return this.search(root.left,value)
   }
   else{
    return this.search(root.right,value)
   }

    }
    preorder(root){
        if(root){

            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right)
        }
    }
    InOrder(root){
        if(root){

            this.InOrder(root.left)
            console.log(root.value)
            this.InOrder(root.right)
        }

    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
        this.postOrder(root.right)
        console.log(root.value);
    }
}
    levelOrder(){
        const queue = [];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    max(root){
        
        if(!root.right){
            return root.value
        }
        else{
            
           
            return this.max(root.right)
        }
    }
delete(value){
    this.root = this.deleteNode(this.root,value);
}
 deleteNode(root,value){
    if(root===null){
        return root
    }
    if(value<root.value){
        root.left =this.deleteNode(root.left,value)
    }
   else if(value>root.value){
        root.right = this.deleteNode(root.right,value)
    }
    else{
        if(!root.left && !root.right){
            return null
        }
         if(!root.left){
            return root.right
        }
        else if(!root.right){
            return root.left
        }
        root.value= this.min(root.right);
        root.right =this.deleteNode(root.right,root.value)
    }
    return root
 }   
 closestt(root,value){
    let closest = root.value;
    while(root){
        if(Math.abs(root.value-value)<Math.abs(closest-value)){
            closest=root.value
        }
        else if(value<root.value){
            root =root.left
        }
        else{
            root=root.right;
        }
    }
    return closest
 }

 path(value){
    let path =[];
    let curr =this.root;
    while(curr){
        path.push(curr.value)
        if(value===curr.value){
            path.pop()
            return path



        }
        if(value<curr.value){
            curr = curr.left
        }
        else{
            curr= curr.right
        }
    }
 }
 common(node1,node2){
    let path1=this.path(node1);
    let path2 = this.path(node2)
    if(!path1 || !path2){
        return null
    }
    let common=0
    for(let i=0;i<path1.length;i++){
        if(path1[i]==path2[i]){
            common=path1[i]
        }
        else{
            break
        }
    }
    return common
}
}
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);

tree.insert(3);
tree.insert(7);
console.log(tree.search(tree.root, 3));
// tree.preorder( tree.root)
// tree.InOrder( tree.root)
// tree.postOrder( tree.root)
tree.levelOrder()
console.log(tree.min(tree.root))
console.log(tree.max(tree.root))
tree.delete(15);
console.log(tree.max(tree.root))
console.log(tree.common(5,15))
console.log(tree.closestt(tree.root,15))