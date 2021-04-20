/*
 * @Author: tangdaoyong
 * @Date: 2021-04-19 13:06:16
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-19 13:54:24
 * @Description: 对称二叉树
 */
import TreeNode from './TreeNode';
/*
101. 对称二叉树
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？
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
 * 广度（DFS）
 * @param root 
 * @returns 
 * 执行用时：112 ms, 在所有 TypeScript 提交中击败了11.02%的用户
 * 内存消耗：41 MB, 在所有 TypeScript 提交中击败了8.16%的用户
 */
function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true
    }
    let tempArr = Array<TreeNode | null>()
    tempArr.push(root)
    while (tempArr.length > 0) {
        let leftIndex = 0
        let rightIndex = tempArr.length - 1
        while (rightIndex > leftIndex) {
            if (tempArr[leftIndex] !== null && tempArr[rightIndex] !== null) {
                if (tempArr[leftIndex].val !== tempArr[rightIndex].val) {
                    return false
                }
            } else if (tempArr[leftIndex] !== null && tempArr[rightIndex] === null) {
                return false
            } else if (tempArr[leftIndex] === null && tempArr[rightIndex] !== null) {
                return false
            } else {

            }
            rightIndex -= 1
            leftIndex += 1
        }
        const len = tempArr.length
        for (let i = 0; i < len; i++) {
            let temp = tempArr.shift()
            if (temp !== null) {
                tempArr.push(temp.left)
                tempArr.push(temp.right)
            }
        }
    }
    return true
};

/**
 * 双指针，递归
 * @param root 
 * 执行用时：100 ms, 在所有 TypeScript 提交中击败了52.24%的用户
 * 内存消耗：40.9 MB, 在所有 TypeScript 提交中击败了14.28%的用户
 */
function isSymmetricOne(root: TreeNode | null): boolean {
    // return checkNode(root, root)
    return checkNodeOne(root, root)
}

function checkNode(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null && right === null) {
        return true
    }
    if (left !== null && right !== null) {
        return left.val === right.val && checkNode(left.left, right.right) && checkNode(left.right, right.left)
    }
    return false
}


/**
 * 
 * @param left 
 * @param right 
 * @returns 
 * 执行用时：100 ms, 在所有 TypeScript 提交中击败了52.24%的用户
 * 内存消耗：40.2 MB, 在所有 TypeScript 提交中击败了49.79%的用户
 */
function checkNodeOne(left: TreeNode | null, right: TreeNode | null): boolean {
    let tempArr = Array<TreeNode | null>()
    tempArr.push(left)
    tempArr.push(right)
    while (tempArr.length) {
        let tempLeft = tempArr.shift()
        let tempRight = tempArr.shift()
        if (tempLeft === null && tempRight === null) {
            continue
        }
        if (tempLeft !== null && tempRight !== null) {
            if (tempLeft.val === tempRight.val) {
                tempArr.push(tempLeft.left)
                tempArr.push(tempRight.right)
                tempArr.push(tempLeft.right)
                tempArr.push(tempRight.left)
                continue
            }
            return false
        }
        return false
    }
    return true
}

/**
 * 广度（DFS）优化
 * @param root 
 * @returns 
 * 执行用时：112 ms, 在所有 TypeScript 提交中击败了11.02%的用户
 * 内存消耗：40.9 MB, 在所有 TypeScript 提交中击败了21.63%的用户
 */
 function isSymmetricThree(root: TreeNode | null): boolean {
    if (root === null) {
        return true
    }
    let tempArr = Array<TreeNode | null>()
    tempArr.push(root)
    while (tempArr.length) {
        let tempLeft = tempArr.shift()
        let tempRight = tempArr.shift()
        if (tempLeft === null && tempRight === null) {
            continue
        }
        if (tempLeft !== null && tempRight !== null) {
            if (tempLeft.val === tempRight.val) {
                tempArr.push(tempLeft.left)
                tempArr.push(tempRight.right)
                tempArr.push(tempLeft.right)
                tempArr.push(tempRight.left)
                continue
            }
            return false
        }
        return false
    }
    return true
};