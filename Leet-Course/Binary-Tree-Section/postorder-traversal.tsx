/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Recursive
function postorderTraversal(root: TreeNode | null): number[] {
    const res: Array<number> = [];
    
    if (root) {
        return res.concat(postorderTraversal(root.left), 
                          postorderTraversal(root.right), 
                          root.val
                         );
    }

    return res;
};

// Iteratively
// Correct solution
var postorderTraversal = function(root) {
    if (!root) return [];
    
    var result = [], stack = [root];
    
    while (stack.length) {
        var node = stack.pop();
        result.unshift(node.val);

        if (node.left) stack.push(node.left); 
        if (node.right) stack.push(node.right); 
    }
    
    return result;
};