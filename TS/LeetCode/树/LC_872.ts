/*
 * @Author: tangdaoyong
 * @Date: 2021-03-03 20:28:57
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-03 20:57:34
 * @Description: 叶子相似的树
 */
import TreeNode from '../TreeNode';
import QueueT from '../../utils/Queue';
/*
872. 叶子相似的树
请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。
如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

提示：

给定的两棵树可能会有 1 到 200 个结点。
给定的两棵树上的值介于 0 到 200 之间。
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
 * 深度优先
 * @param root1 
 * @param root2 
 * 执行用时：
80 ms
, 在所有 TypeScript 提交中击败了
100.00%
的用户
内存消耗：
39.5 MB
, 在所有 TypeScript 提交中击败了
100.00%
的用户
*/
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let arr1 = TreeChildNode(root1)
    let arr2 = TreeChildNode(root2)
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) {
            return false
        }
    }
    return true
};

/**
 * 返回节点的子节点值数组
 * @param root 
 */
function TreeChildNode(root: TreeNode | null): number[] {
    if (root === null) {
        return []
    }
    if (root.left === null && root.right === null) {
        return [root.val]
    }
    if (root.left === null) {
        return [...TreeChildNode(root.right)]
    }
    if (root.right === null) {
        return [...TreeChildNode(root.left)]
    }
    return [...TreeChildNode(root.left), ...TreeChildNode(root.right)]
}

function leafSimilarOne(root1: TreeNode | null, root2: TreeNode | null): boolean {
    // generator
    const getLeaves = function* (root:TreeNode | null) {
        if(!root) return;
        !root.left && !root.right && (yield root.val)
        yield* getLeaves(root.left)
        yield* getLeaves(root.right)
    }

    let arr1 = [...getLeaves(root1)]
    let arr2 = [...getLeaves(root2)]
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) {
            return false
        }
    }
    return true

    // return [...getLeaves(root1)].join() === [...getLeaves(root2)].join()
};