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

function isSymmetric(root): boolean {
    let stack = [root]
    let pairsArr: Array<{
        leftNode: number;
        rightNode: number;
    }> = []
    let comparisonArr: Array<{
        leftNode: number;
        rightNode: number;
    }> = []

    let pairStack: {
        leftNode: number;
        rightNode: number;
    } = {
        leftNode: 0,
        rightNode: 0
    }

    if (!root) {
        return
    }

    while (stack.length) {
        const node = stack.pop()

        if (node.left) {
            stack.push(node.left)
            pairStack.leftNode = root.left.val
        }

        if (node.right) {
            stack.push(node.right)
            pairStack.rightNode = root.right.val
        }

        pairsArr.push(pairStack)
    }

    comparisonArr.push(pairStack)

    const isTreeSymmetric = comparisonArr.filter((stackPair, index) => {
        while (index !== stackPair[length - 1]) {
            return stackPair.leftNode === comparisonArr[index + 1].rightNode
        }
    })

    if (isTreeSymmetric) {
        return true
    }
    return false
};