/*
 * @Author: tangdaoyong
 * @Date: 2021-02-24 10:16:36
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-02-24 12:03:24
 * @Description: 617. 合并二叉树
 */
import TreeNode from '../TreeNode';
/*
617. 合并二叉树
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。
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
/**
 * @description: 合并二叉树，深度优先
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {*}
 * 140 ms	45.8 MB	TypeScript
 * 复杂度分析
时间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个二叉树的节点个数。对两个二叉树同时进行深度优先搜索，只有当两个二叉树中的对应节点都不为空时才会对该节点进行显性合并操作，因此被访问到的节点数不会超过较小的二叉树的节点数。
空间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个二叉树的节点个数。空间复杂度取决于递归调用的层数，递归调用的层数不会超过较小的二叉树的最大高度，最坏情况下，二叉树的高度等于节点数。
 */
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    // 140 ms	45.8 MB	TypeScript
    // if (root1 === null && root2 === null) {
    //     return null
    // } else if (root1 !== null && root2 === null) {
    //     return root1
    // } else if (root1 === null && root2 !== null) {
    //     return root2
    // } else {
    //     return new TreeNode(root1.val + root2.val, mergeTrees(root1.left, root2.left), mergeTrees(root1.right, root2.right))
    // }
    // 136 ms	46 MB	TypeScript
    if (root2 === null) {
        return root1
    }
    if (root1 === null) {
        return root2
    }
    return new TreeNode(root1.val + root2.val, mergeTrees(root1.left, root2.left), mergeTrees(root1.right, root2.right))
};

// TODO: - 还可是使用广度优先(BFS),可参考LeetCode题解