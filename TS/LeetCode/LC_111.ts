/*
 * @Author: tangdaoyong
 * @Date: 2023-04-12 22:27:34
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-04-12 22:39:41
 * @Description: 111. 二叉树的最小深度
 */
/*
111. 二叉树的最小深度
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 

提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000
*/
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

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0
    }
    let ans = 0
    let num = 1
    let arr = [root]
    while (arr.length > 0) {
        const first = arr.shift()
        if (first) {
            if (!first.left && !first.right) {
                return ans + 1
            }
            if (first.left) {
                arr.push(first.left)
            }
            if (first.right) {
                arr.push(first.right)
            }
        }
        num -= 1
        if (num === 0) {
            ans += 1
            num = arr.length
        }
    }
    return ans
};