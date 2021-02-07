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

 // Correct solution
 const levelOrderBottom = function(root) {
    const queue = [];
    const resArr = [];
    
    if (!root) {
        return [];
    }
    
    queue.push(root);

    while (queue.length > 0) {
        const arr = []; 
        const { length } = queue;

        for (let i = 0; i < length; i++) {
            const tempNode = new TreeNode();
            tempNode = queue.shift();

            if (tempNode.left !== null) {
                queue.push(tempNode.left);
            }

            if (tempNode.right !== null) {
                queue.push(tempNode.right);
            }

            arr.push(tempNode.val);
        }
        resArr.push(arr);
    }
    return resArr;    
};