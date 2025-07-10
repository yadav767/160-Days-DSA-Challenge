var preorderTraversal = function (root) {
    let answer = [];
    function dfs(root) {
        if (root == null) return;
        answer.push(root.val);
        dfs(root.left);
        dfs(root.right);

    }
    dfs(root);
    return answer;

}