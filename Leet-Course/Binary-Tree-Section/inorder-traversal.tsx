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
function inorderTraversal(root: TreeNode | null): number[] {
    const res: Array<number> = [];
    
    if (root) {
        return res.concat(inorderTraversal(root.left), root.val, inorderTraversal(root.right));
    }

    return res;
};

// Better solution
function inorderTraversal(root: TreeNode | null): number[] { 
    let result = [];
    
    function iot(node) {
        if(!node) {
            return;
        }
        iot(node.left);
        result.push(node.val);
        iot(node.right);
    }
    
    iot(root);
    return result;
}

// ------------------------------------------------------------------------------------------------------------------------------

// Iteratively
// Correct solution
function inorderTraversal(root: TreeNode | null): number[] { 
    let results = [];
    let stack = [];
    let currNode = root;

    stack.push(root);

    while (currNode !== null || stack.length > 0) {
        while (currNode) {
            currNode = currNode.left;
            stack.push(currNode);
        }
        
        if (stack.length > 0) {
            currNode = stack.pop();
            
            if (currNode) {
                results.push(currNode.val);
                currNode = currNode.right;
                stack.push(currNode);
            }
        }
    }
    return results;
}