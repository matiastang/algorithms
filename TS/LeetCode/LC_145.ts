/*
 * @Author: tangdaoyong
 * @Date: 2023-04-12 22:58:39
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-04-12 23:11:13
 * @Description: 145. 二叉树的后序遍历
 */
/*
145. 二叉树的后序遍历
给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

 

示例 1：


输入：root = [1,null,2,3]
输出：[3,2,1]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
 

提示：

树中节点的数目在范围 [0, 100] 内
-100 <= Node.val <= 100
 

进阶：递归算法很简单，你可以通过迭代算法完成吗？
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

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }
    let ans: number[] = []
    const db: TreeNode[] = [root]
    while (db.length) {
        const next = db.shift()
        if (!next) {
            continue
        }
        ans.unshift(next.val)
        next.left && db.unshift(next.left)
        next.right && db.unshift(next.right)
    }
    return ans
};

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }
    let ans: number[] = []
    const db: TreeNode[] = [root]
    while (db.length) {
        const next = db.pop()
        if (!next) {
            continue
        }
        ans.push(next.val)
        next.left && db.push(next.left)
        next.right && db.push(next.right)
    }
    return ans.reverse()
};