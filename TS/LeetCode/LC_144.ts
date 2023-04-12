/*
 * @Author: tangdaoyong
 * @Date: 2023-04-12 22:38:44
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-04-12 22:57:15
 * @Description: 144. 二叉树的前序遍历
 */
/*
144. 二叉树的前序遍历
给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 

示例 1：


输入：root = [1,null,2,3]
输出：[1,2,3]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
示例 4：


输入：root = [1,2]
输出：[1,2]
示例 5：


输入：root = [1,null,2]
输出：[1,2]
 

提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100
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
// 递归前序遍历
function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};
// 迭代前序遍历
function preorderTraversalDFS(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }
    let ans: number[] = []
    const db: TreeNode[] = [root]
    while (db.length) {
        const first = db.shift()
        if (!first) {
            continue
        }
        ans.push(first.val)
        first.right && db.unshift(first.right)
        first.left && db.unshift(first.left)
    }
    return ans
};