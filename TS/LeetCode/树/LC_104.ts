/*
 * @Author: tangdaoyong
 * @Date: 2021-02-24 09:17:39
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-02 12:06:31
 * @Description: 104. 二叉树的最大深度
 */
import QueueT from '../../utils/Queue'
import TreeNode from '../TreeNode';
/*
104. 二叉树的最大深度
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
*/
/**
 * @description: 二叉树的最大深度，深度优先搜索DFS
 * @param {TreeNode} root
 * @return {*}
 * 108 ms	42 MB	TypeScript
 * 复杂度分析
时间复杂度：O(n)O(n)，其中 nn 为二叉树节点的个数。每个节点在递归中只被遍历一次。
空间复杂度：O(\textit{height})O(height)，其中 \textit{height}height 表示二叉树的高度。递归函数需要栈空间，而栈空间取决于递归的深度，因此空间复杂度等价于二叉树的高度。
 */
function maxDepthOne(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    return Math.max(maxDepthOne(root.left), maxDepthOne(root.right)) + 1
};
/**
 * @description: 二叉树的最大深度，广度优先搜索BFS
 * @param {TreeNode} root
 * @return {*}
 * 108 ms	42.2 MB	TypeScript
 * 复杂度分析
时间复杂度：O(n)O(n)，其中 nn 为二叉树的节点个数。与方法一同样的分析，每个节点只会被访问一次。
空间复杂度：此方法空间的消耗取决于队列存储的元素数量，其在最坏情况下会达到 O(n)O(n)。
 */
function maxDepthTwo(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    let treeQueue = new QueueT<TreeNode>()
    treeQueue.push(root)
    let number = 0;
    while (treeQueue.size() > 0) {
        // 队列深度即为广度
        let size = treeQueue.size()
        // 同一层的广度处理
        for (let index = 0; index < size; index++) {
            let node = treeQueue.pop();
            if (node === undefined) {
                continue
            }
            if (node.left !== null) {
                treeQueue.push(node.left)
            }
            if (node.right !== null) {
                treeQueue.push(node.right)
            }
        }
        number += 1
    }
    return number
};

/**
 * @description: 二叉树的最小深度，广度优先搜索BFS
 * @param {TreeNode} root
 * @return {*}
 * BFS搜索最大深度时间复杂度和递归一样，但搜索最小深度时间复杂度明显优于DFS
 */
function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    let treeQueue = new QueueT<TreeNode>()
    treeQueue.push(root)
    let number = 0;
    let search = true;
    while (search && treeQueue.size() > 0) {
        // 队列深度即为广度
        let size = treeQueue.size()
        // 同一层的广度处理
        for (let index = 0; index < size; index++) {
            let node = treeQueue.pop();
            if (node === undefined) {
                continue
            }
            if (node.left !== null) {
                treeQueue.push(node.left)
            } else {
                search = false
                break;
            }
            if (node.right !== null) {
                treeQueue.push(node.right)
            } else {
                search = false
                break;
            }
        }
        number += 1
    }
    return number
};