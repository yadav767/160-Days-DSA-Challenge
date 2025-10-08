//letcode-100   . Same Tree

var isSameTree = function (p, q) {
    if (!p && !q) return true;      // both null → same
    if (!p || !q) return false;     // one null → not same
    if (p.val !== q.val) return false; // value mismatch → not same

    // check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};

