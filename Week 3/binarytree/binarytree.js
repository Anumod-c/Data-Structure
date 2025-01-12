class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchtree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.InsertNode(this.root, newNode);
    }
  }
  InsertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.InsertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.InsertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    console.log("After deleting");
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
  path(value) {
    let path = [];
    let curr = this.root;
    while (curr) {
      path.push(curr.value);
      if (value === curr.value) {
        path.pop();
        return path;
      }
      if (value < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }
  common(node1, node2) {
    let path1 = this.path(node1);
    let path2 = this.path(node2);
    if (!path1 || !path2) {
      return null;
    }
    let common = 0;
    for (let i = 0; i < path1.length; i++) {
      if (path1[i] == path2[i]) {
        common = path1[i];
      } else {
        break;
      }
    }
    return common;
  }
  closest(root, value) {
    let closest = root.value;
    while (root) {
      if (Math.abs(root.value - value) < Math.abs(closest - value)) {
        closest = root.value;
      } else if (value < root.value) {
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return closest;
  }
  depth(root) {
    if (!root) {
      return 0;
    }
    if (!root.left && !root.right) {
      return 1;
    }
    let leftDepth = this.depth(root.left);
    let rigthDepth = this.depth(root.right);
    return Math.max(leftDepth, rigthDepth) + 1;
  }
}
const bst = new BinarySearchtree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
// console.log("min Value",bst.min(bst.root));
// console.log("max vlauue",bst.max(bst.root));
// console.log(bst.isEmpty());
// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,200));
// console.log(bst.search(bst.root,300));
// bst.preOrder(bst.root)
// bst.inorder(bst.root)
bst.levelOrder();
// bst.delete(3);
// bst.levelOrder()
console.log(bst.common(3, 15));
console.log("closest", bst.closest(bst.root, 1));
console.log(bst.path(5));
console.log("search", bst.search(bst.root, 7));
bst.delete(15);
console.log("search", bst.search(bst.root, 7));
