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
function inorderTraversal(root: TreeNode | null): number[] {
    const res: Array<number> = [];
    
    if (root) {
        return res.concat(inorderTraversal(root.left), root.val, inorderTraversal(root.right));
    }

    return res;
};

// Iteratively
// Todo