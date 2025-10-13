//Leetcode 450. Delete Node in a BST

var findLastChild = function (root) {
    if (root.right === null) return root;
    return findLastChild(root.right)
}
var helper = function (root) {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left
    let rightChild = root.right;
    let rightMostChild = findLastChild(root.left);
    rightMostChild.right = rightChild;
    return root.left;
}
var deleteNode = function (root, key) {
    if (root === null) return null;
    if (root.val === key) {
        return helper(root);
    }
    let dummy = root
    while (root != null) {
        if (root.val > key) {
            if (root.left != null && root.left.val === key) {
                root.left = helper(root.left);
                break;
            } else {
                root = root.left;
            }

        } else {
            if (root.right != null && root.right.val === key) {
                root.right = helper(root.right);
                break;
            } else {
                root = root.right;
            }
        }
    }
    return dummy

};