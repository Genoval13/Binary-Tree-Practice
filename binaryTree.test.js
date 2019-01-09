const Tree = require('./BinaryTree');

describe('add a new child', () => {
    it('should add a new child with the given value', () => {
        let tree = new Tree();

        tree.addChild(0);
        expect(tree.root.value).toEqual(0);
        tree.addChild(1);
        //console.log(tree)
        tree.addChild(2);
        expect(tree.root.right.value).toEqual(1);
        console.log(tree.allNodes)
        
       
        //expect(tree.root.right.value).toEqual(3);

    })
})

// describe('remove child', () => {
//     it('should remove child with the given value', () => {
//         let tree = new Tree(0);
//         tree.addChild(1);
//         tree.addChild(2);
//         tree.addChild(3);
//         tree.addChild(4);

//         tree.removeChild(4);
//         expect(tree.children[0].children).toHaveLength(1);

//         tree.removeChild(2);
//         expect(tree.children).toHaveLength(1);

//     })
// })

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