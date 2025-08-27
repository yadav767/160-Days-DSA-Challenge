//Leetcode Problem 226: Invert Binary Tree

var invertTree = function (root) {
    if (root === null) return null;

    // swap left & right
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // recursive calls
    invertTree(root.left);
    invertTree(root.right);

    return root;
};
