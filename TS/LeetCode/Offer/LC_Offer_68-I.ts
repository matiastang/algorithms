/*
 * @Author: tangdaoyong
 * @Date: 2021-03-03 21:25:19
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-03 21:58:27
 * @Description: 二叉搜索树的最近公共祖先
 */
import TreeNode from '../TreeNode';
/*
剑指 Offer 68 - I. 二叉搜索树的最近公共祖先
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
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
 * 递归解
 * @param root 
 * @param p 
 * @param q 
 * 执行用时：
116 ms
, 在所有 TypeScript 提交中击败了
34.29%
的用户
内存消耗：
47.9 MB
, 在所有 TypeScript 提交中击败了
97.14%
的用户
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null ) {
        return root
    }
    if (root.val < Math.min(p.val, q.val)) {
        return lowestCommonAncestor(root.right, p, q)
    }
    if (root.val > Math.max(p.val, q.val)) {
        return lowestCommonAncestor(root.left, p, q)
    }
    return root
};

/**
 * 迭代
 * @param root 
 * @param p 
 * @param q 
 * 执行用时：
148 ms
, 在所有 TypeScript 提交中击败了
5.71%
的用户
内存消耗：
47.8 MB
, 在所有 TypeScript 提交中击败了
97.14%
的用户
 */
function lowestCommonAncestorOne(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // while (root) {
    //     if (root.val < p.val && root.val < q.val) {
    //         root = root.right
    //         continue
    //     }
    //     if (root.val > p.val && root.val > q.val) {
    //         root = root.left
    //         continue
    //     }
    //     return root
    // }
    // return root

    /*
    执行用时：
    112 ms
    , 在所有 TypeScript 提交中击败了
    48.57%
    的用户
    内存消耗：
    47.9 MB
    , 在所有 TypeScript 提交中击败了
    97.14%
    的用户
    */
    let min = Math.min(p.val, q.val)
    let max = Math.max(p.val, q.val)
    while (root) {// 使用root != null提升性能，数据如末尾
        if (root.val < min) {
            root = root.right
        } else if (root.val > max) {
            root = root.left
        } else {
            return root
        }
    }
    return root
    /*
    执行用时：
    108 ms
    , 在所有 TypeScript 提交中击败了
    74.29%
    的用户
    内存消耗：
    47.8 MB
    , 在所有 TypeScript 提交中击败了
    97.14%
    的用户
    */
};