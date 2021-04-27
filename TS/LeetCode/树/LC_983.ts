/*
 * @Author: tangdaoyong
 * @Date: 2021-04-27 09:29:17
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-27 10:08:40
 * @Description: 二叉搜索树的范围和
 */
/*
938. 二叉搜索树的范围和
给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

 

示例 1：


输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32
示例 2：


输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23
 

提示：

树中节点数目在范围 [1, 2 * 104] 内
1 <= Node.val <= 105
1 <= low <= high <= 105
所有 Node.val 互不相同
*/
import TreeNode from '../TreeNode';
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
 * 广度优先BFS
 * @param root 
 * @param low 
 * @param high 
 * @returns 
 * 执行用时：244 ms, 在所有 TypeScript 提交中击败了78.57%的用户
 * 内存消耗：62.7 MB, 在所有 TypeScript 提交中击败了100.00%的用户
 */
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let ans = 0
    let tempArr = Array<TreeNode | null>()
    tempArr.push(root)
    while (tempArr.length > 0) {
        let node = tempArr.shift()
        if (node === null) {
            continue
        }
        if (node.val >= low && node.val <= high) {
            ans += node.val
            tempArr.push(node.left)
            tempArr.push(node.right)
        }
        if (node.val < low) {
            tempArr.push(node.right)
        }
        if (node.val > high) {
            tempArr.push(node.left)
        }
    }
    return ans
};

/**
 * 广度优先迭代版
 * @param root 
 * @param low 
 * @param high 
 * @returns 
 */
function rangeSumBSTOne(root: TreeNode | null, low: number, high: number): number {
    let ans = 0
    function BFS(node: TreeNode | null) {
        if (node === null) {
            return
        }
        if (node.val >= low && node.val <= high) {
            ans += node.val
            BFS(node.left)
            BFS(node.right)
        }
        if (node.val < low) {
            BFS(node.right)
        }
        if (node.val > high) {
            BFS(node.left)
        }
    }
    BFS(root)
    return ans
};

/**
 * 深度优先（DFS）
 * @param root 
 * @param low 
 * @param high 
 * @returns 
 * 执行用时：240 ms, 在所有 TypeScript 提交中击败了85.71%的用户
 * 内存消耗：66.1 MB, 在所有 TypeScript 提交中击败了14.29%的用户
 */
function rangeSumBSTTwo(root: TreeNode | null, low: number, high: number): number {
    let ans = 0
    let tempArr = Array<TreeNode | null>()
    function DFS(node: TreeNode | null) {
        if (node === null) {
            return
        }
        if (node.val >= low && node.val <= high) {
            ans += node.val
            tempArr.push(node.left)
            DFS(node.left)
            tempArr.pop()
            tempArr.push(node.right)
            DFS(node.right)
            tempArr.pop()
        }
        if (node.val < low) {
            tempArr.push(node.right)
            DFS(node.right)
            tempArr.pop()
        }
        if (node.val > high) {
            tempArr.push(node.left)
            DFS(node.left)
            tempArr.pop()
        }
    }
    DFS(root)
    return ans
};