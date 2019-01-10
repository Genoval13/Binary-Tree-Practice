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
        this.allNodes = [];
    }
    addChild(value) {   // 2
        let root = this.root; //0
        if (!root) {
            this.root = new Node(value);
            this.allNodes.push(this.root);
            return;
        } else {
            let currentNode = root; //0
            let newNode = new Node(value); //2
            this.allNodes.push(newNode);
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

    removeChild(value) {
        let root = this.root;
        let currentNode = root;
        let nodeList = [];
        while (currentNode) {
            nodeList.push(currentNode);
        }
        nodeList.filter(el => el !== value)
    }
}


module.exports = Tree