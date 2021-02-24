/*
 * @Author: tangdaoyong
 * @Date: 2021-02-23 09:16:12
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-02-23 14:03:14
 * @Description: 110. 平衡二叉树
 */
/*
110. 平衡二叉树
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：true
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

function isBalancedOne(root: TreeNode | null): boolean {
    // 树为空
    if (root === null) {
        return true
    }
    let left = root.left
    let right = root.right
    // 已经是叶子节点
    if (left === null && right === null) {
        return true
    }
    // 不是二叉树
    if ((left === null && right !== null) || (left !== null && right === null)) {
        return false
    }
    // 是二叉树
    // 左右节点有一个不是高度平衡二叉树
    if (!isBalancedOne(left) || !isBalancedOne(right)) {
        return false
    }
    if (left.left === null && right.left !== null) {
        if (right.left.left !== null || right.left.right !== null) {
            return false
        }
    }
    if (left.left === null && right.right !== null) {
        if (right.right.left !== null || right.right.right !== null) {
            return false
        }
    }
    if (left.left !== null && right.left === null) {
        if (left.left.left !== null || left.left.right !== null) {
            return false
        }
    }
    if (left.right !== null && right.left === null) {
        if (left.right.left !== null || left.right.right !== null) {
            return false
        }
    }
    return  true
};
/*
* 自顶向下递归
*/
function isBalancedTwo(root: TreeNode | null): boolean {
    if (root === null) {
        return true
    } else {
        return Math.abs(treeHeightTwo(root.left) - treeHeightTwo(root.right)) <= 1 && isBalancedTwo(root.left) && isBalancedTwo(root.right)
    }
}

function treeHeightTwo(root: TreeNode | null):number {
    if (root === null) {
        return 0
    } else {
        return Math.max(treeHeightTwo(root.left), treeHeightTwo(root.right)) + 1
    }
}
/*
* 自底向上递归
*/
function isBalancedThree(root: TreeNode | null): boolean {
    return treeHeightThree(root) >= 0
}

function treeHeightThree(root: TreeNode | null):number {
    if (root === null) {
        return 0
    }
    let leftH = treeHeightThree(root.left)
    let rightH = treeHeightThree(root.right)
    if (leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) {
        return -1
    }
    return Math.max(leftH, rightH) + 1
}
/*
* 自底向上递归。
* 左侧不平衡则直接返回，不用计算右侧树
*/
function isBalanced(root: TreeNode | null): boolean {
    return treeHeight(root) >= 0
}

function treeHeight(root: TreeNode | null):number {
    if (root === null) {
        return 0
    }
    let leftH = treeHeight(root.left)
    if (leftH === -1) {
        return -1
    }
    let rightH = treeHeight(root.right)
    if (rightH === -1 || Math.abs(leftH - rightH) > 1) {
        return -1
    }
    return Math.max(leftH, rightH) + 1
}