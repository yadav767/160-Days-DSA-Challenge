//Leetcode Problem 701: Insert into a Binary Search Tree

var insertIntoBST = function (root, val) {
    if (root == null) return new TreeNode(val);
    let current = new TreeNode();
    current = root;
    while (true) {
        if (current.val <= val) {
            if (current.right != null) current = current.right;
            else {
                current.right = new TreeNode(val);
                break;
            }
        }
        else {
            if (current.left != null) current = current.left;
            else {
                current.left = new TreeNode(val);
                break;
            }
        }
    }
    return root

};