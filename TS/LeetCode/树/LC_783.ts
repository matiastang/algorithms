/*
 * @Author: tangdaoyong
 * @Date: 2021-04-13 09:14:23
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-13 11:40:27
 * @Description: 二叉搜索树节点最小距离
 */
/*
783. 二叉搜索树节点最小距离
给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

注意：本题与 530：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/ 相同

 

示例 1：


输入：root = [4,2,6,1,3]
输出：1
示例 2：


输入：root = [1,0,48,null,null,12,49]
输出：1
 

提示：

树中节点数目在范围 [2, 100] 内
0 <= Node.val <= 105

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
import TreeNode from '../TreeNode';

/**
 * 获取所有节点，排序，查找最小值
 * @param root 
 * @returns 
 * 执行用时：
88 ms
, 在所有 TypeScript 提交中击败了
66.67%
的用户
内存消耗：
40 MB
, 在所有 TypeScript 提交中击败了
53.33%
的用户
 */
function minDiffInBST(root: TreeNode | null): number {
    let tempArr = Array<number>()
    function BFS(root: TreeNode | null) {
        if (root === null) {
            return
        }
        // tempArr.push(root.val)
        // BFS(root.left)
        // BFS(root.right)
        // tempArr.pop()深度优先不退出，则得到节点数组
        BFS(root.left)
        tempArr.push(root.val)// 中序遍历，默认有序了
        BFS(root.right)
    }
    BFS(root)
    // 排序
    tempArr.filter((left, right) => {
        if (left > right) {
            return 1
        }
        if (left < right) {
            return -1
        }
        return 0
    })
    return findMin(tempArr)
};

function minDiffInBSTFour(root: TreeNode | null): number {
    let tempArr = Array<number>()
    function BFS(root: TreeNode | null) {
        if (root === null) {
            return
        }
        BFS(root.left)
        tempArr.push(root.val)// 中序遍历，默认有序了
        BFS(root.right)
    }
    BFS(root)
    return findMin(tempArr)
};

/**
 * 动态规划查找一次深度优先的最小差值,此处是升序数组
 * @param arr 
 */
function findMin(arr: number[]): number {
    // TODO: - 长度校验
    let ans = Number.MAX_VALUE
    for (let i = 0; i < arr.length - 1; i++) {
        let temp = arr[i + 1] - arr[i]
        if (temp < ans) {
            ans = temp
        }
    }
    return ans
}

function minDiffInBSTOne(root: TreeNode | null): number {
    let tempArr = Array<number>()
    function DFS(root: TreeNode | null) {
        if (root === null) {
            return
        }
        tempArr.push(root.val)
        DFS(root.left)
        DFS(root.right)
        // tempArr.pop()深度优先不退出，则得到节点数组
    }
    DFS(root)
    return 0
};

/**
 * 二叉搜索树（中序遍历）
 * @param root 
 * 执行用时：
108 ms
, 在所有 TypeScript 提交中击败了
26.67%
的用户
内存消耗：
40 MB
, 在所有 TypeScript 提交中击败了
53.33%
的用户
 */
function minDiffInBSTTwo(root: TreeNode | null): number {
    let ans = Number.MAX_VALUE
    let tempArr = Array<number>()
    function BFS(root: TreeNode | null) {
        if (root === null) {
            return
        }
        BFS(root.left)
        if (tempArr.length > 1) {
            let tempValue = root.val - tempArr[tempArr.length - 1]
            if (tempValue < ans) {
                ans = tempValue
            }
        }
        tempArr.push(root.val)// 中序遍历，默认有序了
        BFS(root.right)
        // tempArr.pop()深度优先不退出，则得到节点数组,赋值放在中间，则得到二叉搜索树的中序遍历数组
    }
    BFS(root)
    return ans
};

/**
 * 二叉搜索树（中序遍历）
 * @param root 
 * 执行用时：
80 ms
, 在所有 TypeScript 提交中击败了
80.00%
的用户
内存消耗：
39.6 MB
, 在所有 TypeScript 提交中击败了
80.00%
的用户
 */
function minDiffInBSTFive(root: TreeNode | null): number {
    let ans = Number.MAX_VALUE
    let tempValue:number | null = null
    function BFS(root: TreeNode | null) {
        if (root === null) {
            return
        }
        BFS(root.left)
        if (tempValue !== null) {
            let temp = root.val - tempValue
            if (temp < ans) {
                ans = temp
            }
        }
        tempValue = root.val
        BFS(root.right)
        // tempArr.pop()深度优先不退出，则得到节点数组,赋值放在中间，则得到二叉搜索树的中序遍历数组
    }
    BFS(root)
    return ans
};