/*
 * @Author: tangdaoyong
 * @Date: 2021-03-02 21:48:39
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-03 09:48:07
 * @Description: file content
 */
import TreeNode from '../TreeNode';
import QueueT from '../../utils/Queue';
/*
100. 相同的树
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的
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
 * 树相同
 * @param p 
 * @param q 
 * 88 ms	39.6 MB	TypeScript
 */
function isSameTreeOne(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true
    }
    if ((p && !q) || (!p && q) || p.val != q.val) {
        return false
    }
    return isSameTreeOne(p.left, q.left) && isSameTreeOne(p.right, q.right)
};

/**
 * 树有相同的子节点，left和right可以交换
 * @param p 
 * @param q 
 */
function isSameTreeTwo(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true
    }
    if ((p && !q) || (!p && q) || p.val != q.val) {
        return false
    }
    return (isSameTreeTwo(p.left, q.left) && isSameTreeTwo(p.right, q.right)) || (isSameTreeTwo(p.left, q.right) && isSameTreeTwo(p.right, q.left))
};

/**
 * 树相同（BFS）
 * @param p 
 * @param q 
 * 92 ms	39.8 MB	TypeScript
 */
function isSameTreeThree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true
    }
    if ((p && !q) || (!p && q)) {
        return false
    }
    let p_queue = new QueueT<TreeNode | null>()
    let q_queue = new QueueT<TreeNode | null>()
    p_queue.push(p)
    q_queue.push(q)
    while ((p_queue.size() > 0) && (q_queue.size() > 0)) {
        let p_first = p_queue.pop()
        let q_first = q_queue.pop()
        if (!p_first && !q_first) {
            continue
        }
        if ((p_first && !q_first) || (!p_first && q_first) || p_first.val != q_first.val) {
            return false
        }
        p_queue.push(p_first.left)
        p_queue.push(p_first.right)
        q_queue.push(q_first.left)
        q_queue.push(q_first.right)
    }
    return (p_queue.size() === 0) && (q_queue.size() === 0)
};