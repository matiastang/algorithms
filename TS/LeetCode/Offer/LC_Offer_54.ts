/*
 * @Author: tangdaoyong
 * @Date: 2021-03-03 20:59:49
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-03 21:21:51
 * @Description: 二叉搜索树的第k大节点
 */
import TreeNode from '../TreeNode';
/*
剑指 Offer 54. 二叉搜索树的第k大节点
给定一棵二叉搜索树，请找出其中第k大的节点。

限制：

1 ≤ k ≤ 二叉搜索树元素个数
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
 * 先排序再取值
 * @param root 
 * @param k 
 * 执行用时：
104 ms
, 在所有 TypeScript 提交中击败了
68.89%
的用户
内存消耗：
46.5 MB
, 在所有 TypeScript 提交中击败了
11.11%
的用户
 */
function kthLargest(root: TreeNode | null, k: number): number {
    return kthSort(root)[k - 1]
};

/**
 * 树的排序
 * @param root 
 */
function kthSort(root: TreeNode | null): number[] {
    if (root === null) {
        return []
    }
    if (root.left === null && root.right === null) {
        return [root.val]
    }
    // return [...kthSort(root.left), root.val, ...kthSort(root.right)]// 小到大
    return [...kthSort(root.right), root.val, ...kthSort(root.left)]// 大到小
}

/**
 * 显示栈调用
 * @param root 
 * @param k 
 * 执行用时：
96 ms
, 在所有 TypeScript 提交中击败了
93.33%
的用户
内存消耗：
44.8 MB
, 在所有 TypeScript 提交中击败了
88.89%
的用户
 */
function kthLargestOne(root: TreeNode | null, k: number): number {
    let tempArr = Array<TreeNode>()
    let max = 0
    while (root || tempArr.length > 0) {
        while (root) {
            tempArr.push(root)
            root = root.right// 第k大
            // root = root.left// 第K小
        }
        root = tempArr.pop()
        max += 1
        if (max === k) {
            return root.val
        }
        root = root.left// 第k大
        // root = root.right// 第K小
    }
    return 0
};