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

// function isSymmetric(root) {
//     let stack = [root]
//     let pairsArr = []
//     let comparisonArr = []

//     let pairStack = {
//         leftNode: 0,
//         rightNode: 0
//     }

//     if (!root) {
//         return
//     }

//     while (stack.length) {
//         const node = stack.pop()

//         if (node.left) {
//             stack.push(node.left)
//             pairStack.leftNode = root.left.val
//         }

//         if (node.right) {
//             stack.push(node.right)
//             pairStack.rightNode = root.right.val
//         }

//         pairsArr.push(pairStack)
//     }

//     comparisonArr.push(pairStack)

//     const isTreeSymmetric = comparisonArr.filter((stackPair, index) => {
//         while (index !== stackPair[stackPair.length - 1]) {
//             if (comparisonArr[index + 1])
//                 return stackPair.leftNode === comparisonArr[index + 1].rightNode
//         }
//     })

//     if (isTreeSymmetric) {
//         return true
//     }
//     return false
// };

// function isSymmetric(root) {
//     if (!root) {
//         return
//     }

//     const stack = [root]
//     const comparisonArr = []

//     while (stack.length) {
//         const node = stack.pop()
//         (...)
//     }
// }

// Correct solution - recursive
function isSymmetric(TreeNode root) {
    return isMirror(root, root);
}

// Correct solution - iterative
public boolean isSymmetric(TreeNode root) {
    Queue < TreeNode > q = new LinkedList<>();
    q.add(root);
    q.add(root);
    while (!q.isEmpty()) {
        TreeNode t1 = q.poll();
        TreeNode t2 = q.poll();
        if (t1 == null && t2 == null) continue;
        if (t1 == null || t2 == null) return false;
        if (t1.val != t2.val) return false;
        q.add(t1.left);
        q.add(t2.right);
        q.add(t1.right);
        q.add(t2.left);
    }
    return true;
}
console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]))