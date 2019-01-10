const Tree = require('./BinaryTree');

describe('add a new child', () => {
    it('should add a new child with the given value', () => {
        let tree = new Tree();

        tree.addChild(0);
        expect(tree.root.value).toEqual(0);

        tree.addChild(1);
        expect(tree.root.right.value).toEqual(1);

    })
})

describe('remove child', () => {
    it('should remove child with the given value', () => {
        let tree = new Tree(0);
        let arr = [50, 76, 21, 4, 32, 64, 15];
        arr.forEach(el => tree.addChild(el));

        tree.removeChild(21);
        expect(tree.root.left.value).toEqual(32);
        tree.removeChild(76);
        expect(tree.root.right.value).toEqual(64)
    })
});

describe('find the smaller node given a node', () => {
    it('should return minimum node', () => {
        let tree = new Tree(0);
        let arr = [50, 76, 21, 4, 32, 64, 15];
        arr.forEach(el => tree.addChild(el));
        let node1 = tree.root;
        
        expect(tree.findMinNode(node1).value).toEqual(4)
    })
})

// describe('find value by DFS', () => {
//     it('should find the node with the given value by DFS', () => {
//         let tree = new Tree(0);
//         tree.addChild(1);
//         tree.addChild(2);
//         tree.addChild(3);
//         tree.addChild(4);
//         tree.addChild(5);
//         tree.addChild(6);
//         tree.addChild(7);
//         tree.addChild(8);
//         tree.addChild(9);
//         tree.addChild(10);

//         expect(tree.findByDFS(8).value).toEqual(8);

//         expect(tree.findByDFS(6).value).toEqual(6);

//     })
// })

// describe('find value by BFS', () => {
//     it('should find the node with the given value by BFS', () => {
//         let tree = new Tree(0);
//         tree.addChild(1);
//         tree.addChild(2);
//         tree.addChild(3);
//         tree.addChild(4);
//         tree.addChild(5);
//         tree.addChild(6);
//         tree.addChild(7);
//         tree.addChild(8);
//         tree.addChild(9);
//         tree.addChild(10);

//         expect(tree.findByBFS(8).value).toEqual(8);

//         expect(tree.findByBFS(6).value).toEqual(6);

//     })
// })

// describe('return max value', () => {
//     it('should find the node with highest given value', () => {
//         let tree = new Tree(0);
//         tree.addChild(1);
//         tree.addChild(2);
//         tree.addChild(3);
//         tree.addChild(4);
//         tree.addChild(5);
//         tree.addChild(6);
//         tree.addChild(7);
//         tree.addChild(8);
//         tree.addChild(9);
//         tree.addChild(10);

//         expect(tree.maxValue()).toEqual(10);
//     })
// })