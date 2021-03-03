/*
import TreeNode from '../TreeNode';
 * @Author: tangdaoyong
 * @Date: 2021-03-03 15:08:03
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-03 17:13:15
 * @Description: 递增顺序查找树
 */
import TreeNode from '../TreeNode';
/*
897. 递增顺序查找树
给你一个树，请你 按中序遍历 重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。
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
 * 执行用时：
88 ms
, 在所有 TypeScript 提交中击败了
50.00%
的用户
内存消耗：
39.6 MB
, 在所有 TypeScript 提交中击败了
100.00%
的用户
 */
function increasingBSTOne(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return root
    }
    if (root.left === null && root.right === null) {
        return root
    }
    if (root.left === null) {
        root.right = increasingBSTOne(root.right)
        return root
    }
    let left = increasingBSTOne(root.left)
    root.left = null
    root.right = increasingBSTOne(root.right)
    if (left === null) {
        return root
    }
    let right = left
    // 末尾链接
    while (right !== null) {
        if (right.right === null) {
            right.right = root
            break
        }
        right = right.right
    }
    
    return left
};

/**
 * 迭代算法中序遍历
 * @param root 
 * 执行用时：
84 ms
, 在所有 TypeScript 提交中击败了
81.25%
的用户
内存消耗：
39.6 MB
, 在所有 TypeScript 提交中击败了
100.00%
的用户
 */
function increasingBSTTwo(root: TreeNode | null): TreeNode | null {
    let newNode: TreeNode | null = null
    let arr = Array<TreeNode | null>()
    let tempNode: TreeNode | null = null
    while (root || arr.length > 0) {
        while (root) {
            arr.push(root)
            root = root.left
        }
        root = arr.pop()
        if (newNode === null) {
            newNode = root
        } else {
            root.left = null
            tempNode.right = root
        }
        tempNode = root
        root = root.right
    }
    return newNode
};