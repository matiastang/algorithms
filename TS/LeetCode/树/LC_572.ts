/*
 * @Author: tangdaoyong
 * @Date: 2021-02-24 13:14:05
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-02 12:07:16
 * @Description: 572. 另一个树的子树
 */
import TreeNode from '../TreeNode';
/*
572. 另一个树的子树
给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
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

function isSubtree(s: TreeNode | null, t: TreeNode | null): boolean {
    if (s === null && t === null) {
        return true
    }
    if ((s !== null && t === null) || (s === null && t !== null)) {
        return false
    }
    if (s.left === t.left && s.right === t.right && s.val === t.val) {
        return isSubtree(s.left, t.left) && isSubtree(s.right, t.right)
    }
    if (s.left === null) {
        return isSubtree(s.right, t)
    }
    if (s.right === null) {
        return isSubtree(s.left, t)
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t)
    // return (isSubtree(s.left, t.left) && isSubtree(s.right, t.right)) || isSubtree(s.left, t) || isSubtree(s.right, t)
    // let isSub = isSubtree(s.left, t.left) && isSubtree(s.right, t.right)
    // if (isSub) {
    //     return true
    // }
    // if (t.left === null && t.right === null) {
    //     return true
    // } else if (t.left === null && t.right !== null) {
    //     return isSubtree(s.right, t.right)
    // } else if (t.left !== null && t.right === null) {
    //     return isSubtree(s.left, t.left)
    // } else {
    //     return isSubtree(s.left, t.left) && isSubtree(s.right, t.right)
    // }
};

function isSubtreeOne(s: TreeNode | null, t: TreeNode | null): boolean {
    if (isTreeHead(s, t)) {
        return true
    }
    if (s.left === null && s.right === null) {
        return false
    } 
    if (s.left !== null && s.right === null) {
        return isSubtree(s.left, t)
    } 
    if (s.left === null && s.right !== null) {
        return isSubtree(s.right, t)
    } 
    return isSubtree(s.left, t) || isSubtree(s.right, t)
};

/**
 * @description: t是不是s的头部
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {*}
 */
function isTreeHead(s: TreeNode | null, t: TreeNode | null): boolean {
    if (t === null) {
        return true
    }
    if (s === null) {
        return false
    }
    if (s.val !== t.val) {
        return false
    }
    return isTreeHead(s.left, t.left) && isTreeHead(s.right, t.right)
}

/**
 * @description: 
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {*}
 * 100 ms	45.2 MB	TypeScript
 */
function isSubtreeTwo(s: TreeNode | null, t: TreeNode | null): boolean {
    if (isTreeEqual(s, t)) {
        return true
    }
    if (s.left === null && s.right === null) {
        return false
    } 
    if (s.left !== null && s.right === null) {
        return isSubtreeTwo(s.left, t)
    } 
    if (s.left === null && s.right !== null) {
        return isSubtreeTwo(s.right, t)
    } 
    return isSubtreeTwo(s.left, t) || isSubtreeTwo(s.right, t)
};

/**
 * @description: t是不是和s相等
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {*}
 */
function isTreeEqual(s: TreeNode | null, t: TreeNode | null): boolean {
    if (s === null && t === null) {
        return true
    }
    if ((s === null && t !== null) || (s !== null && t === null) || s.val !== t.val) {
        return false
    }
    return isTreeEqual(s.left, t.left) && isTreeEqual(s.right, t.right)
}

function isSubtreeThree(s: TreeNode | null, t: TreeNode | null): boolean {
    if (s === null && t === null) {
        return true
    }
    if ((s === null && t !== null) || (s !== null && t === null)) {
        return false
    }
    if (s.val !== t.val) {
        return isSubtreeThree(s.left, t) || isSubtreeThree(s.right, t)
    }
    return isSubtreeThree(s.left, t.left) && isSubtreeThree(s.right, t.right)
}
/*
[3,4,5,1,2,null,null,0]
[4,1,2]

[1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,2]
[1,null,1,null,1,null,1,null,1,null,1,2]
*/