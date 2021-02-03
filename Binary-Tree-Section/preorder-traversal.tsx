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
// My solution
function preorderTraversal(root: TreeNode | null): number[] {
    const res: Array<number> = [];
    
    if (root) {
        return res.concat(root.val, preorderTraversal(root.left), preorderTraversal(root.right));
    }
    return res;
};

// Iteratively 
// Correct solution
var preorderTraversal = function(root) {
    const stack = [];
		
    if(root !== null){
        stack.push(root);
    }
    
    const res = [];
		
    while(stack.length > 0){
        var node = stack.pop();
        res.push(node.val);
				
        if(node.right !== null){
            stack.push(node.right);
        }
				
        if(node.left !== null){
            stack.push(node.left);
        }
    }

    return res; 
};