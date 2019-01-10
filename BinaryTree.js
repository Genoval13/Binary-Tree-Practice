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
    addChild(value) {   // 2
        let root = this.root; //0
        if (!root) {
            this.root = new Node(value);

            return;
        } else {
            let currentNode = root;  //12
            let newNode = new Node(value); //11

            this.insertValue(currentNode, newNode)
        }
    }

    insertValue(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            }
            else {
                this.insertValue(currentNode.left, newNode)
            }
        }
        else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this.insertValue(currentNode.right, newNode)
            }
        }
    }

    findByDFS(value) {
        let currentNode = this.root;
        if (!currentNode) {
            return null;
        } else {
            let array = [];
            return this.findValue(currentNode, value, array)

        }
    }

    findValue(currentNode, value, array) {

        while(currentNode) {
        if (currentNode === array[0]) {
            return('number doesnt exist')
        } 
          array.push(currentNode.value);
            if (currentNode.value === value) {
                return currentNode;
                break;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
                this.findValue(currentNode, value, array)
            } else {
                currentNode = currentNode.right;
                this.findValue(currentNode, value, array)
            }

        }
    }

    removeChild (value) {
      let banana = this.findByDFS(value);
      console.log(banana);
      if (banana.left === null && banana.right === null) {
        banana.value = null;
      } else if (banana.left === null && banana.right !== null) {
        return banana = banana.right;
      } else if (banana.left !== null && banana.right === null) {
        banana = banana.left;
        // console.log(banana);
      }
    }
}


module.exports = Tree