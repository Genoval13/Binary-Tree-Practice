class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addChild (value) {
    let newNode = new Node (value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode (this.root, newNode)
    }
  };

  insertNode (node, newNode) {
    if (newNode.value < node.value) {
      if ( node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode)
      }

    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  };

  removeChild (value) {
    this.root = this.removeNode(this.root, value)
  }

  removeNode( node, value) {
    if (node === null) {
      return null;
    } else if ( value < node.value ) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if ( value > node.value ) {
      node.right = this.removeNode ( node.right, value);
      return node;
    } else {
      if ( node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if ( node.left === null) {
        node = node.right;
        return node;
      } else if ( node.right === null) {
        node = node.left;
        return node;
      }   
    }

    let mover = this.findMinNode(node.right);
    node.value = mover.value;

    node.right = this.removeNode(node.right, mover.value);
    return node;
  }

  findMinNode (node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left)
    }
  }




}; // end of class Tree



let t = new Tree;
t.addChild(10)
t.addChild(13)
module.exports = Tree