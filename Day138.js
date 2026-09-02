//Leetcode Problem 236: Lowest Common Ancestor of a Binary Tree
let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
var lowestCommonAncestor = function (root, p, q) {

    if (root === null || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;
    return left ? left : right;
};
