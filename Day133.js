//Leetcode - 144. Binary Tree Preorder Traversal

var preorderTraversal = function (root) {
    let result = [];
    function addNode(node) {
        if (node == null) return
        result.push(node.val);
        addNode(node.left)
        addNode(node.right)

    }
    addNode(root)
    return result

};