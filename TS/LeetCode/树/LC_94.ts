/*
 * @Author: tangdaoyong
 * @Date: 2021-03-01 09:17:40
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-04-12 23:57:11
 * @Description: 二叉树的中序遍历
 */
import TreeNode from '../TreeNode';
/*
94. 二叉树的中序遍历
给定一个二叉树的根节点 root ，返回它的 中序 遍历。
https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/
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
 * 递归算法中序遍历(单向递归)
 * @param root 
 * 96 ms	39.6 MB	TypeScript
 */
function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return []
    }
    let left = root.left
    let right = root.right
    if (left === null && right === null) {
        return [root.val]
    }
    if (left !== null && right === null) {
        return [...inorderTraversal(root.left), root.val]
    }
    if (left === null && right !== null) {
        return [root.val, ...inorderTraversal(root.right)]
    }
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

/**
 * 迭代算法中序遍历
 * @param root 
 * 84 ms	39.4 MB	TypeScript
 */
function inorderTraversalTwo(root: TreeNode | null): number[] {
    let arr = Array<number>()
    /*
    * 通过数组，用push和pop模拟栈
    */
    let tempArr = Array<TreeNode>()
    while (root || tempArr.length) {
        while (root) {
            tempArr.push(root)
            root = root.left
        }
        root = tempArr.pop()
        arr.push(root.val)
        root = root.right
    }
    return arr
}

/*
Morris 中序遍历
思路与算法

Morris 遍历算法是另一种遍历二叉树的方法，它能将非递归的中序遍历空间复杂度降为 O(1)O(1)。

Morris 遍历算法整体步骤如下（假设当前遍历到的节点为 xx）：

如果 xx 无左孩子，先将 xx 的值加入答案数组，再访问 xx 的右孩子，即 x = x.\textit{right}x=x.right。
如果 xx 有左孩子，则找到 xx 左子树上最右的节点（即左子树中序遍历的最后一个节点，xx 在中序遍历中的前驱节点），我们记为 \textit{predecessor}predecessor。根据 \textit{predecessor}predecessor 的右孩子是否为空，进行如下操作。
如果 \textit{predecessor}predecessor 的右孩子为空，则将其右孩子指向 xx，然后访问 xx 的左孩子，即 x = x.\textit{left}x=x.left。
如果 \textit{predecessor}predecessor 的右孩子不为空，则此时其右孩子指向 xx，说明我们已经遍历完 xx 的左子树，我们将 \textit{predecessor}predecessor 的右孩子置空，将 xx 的值加入答案数组，然后访问 xx 的右孩子，即 x = x.\textit{right}x=x.right。
重复上述操作，直至访问完整棵树。
*/
function inorderTraversalThree(root: TreeNode | null): number[] {
    let arr = Array<number>()
    let predecessor: TreeNode | null = null;

    while (root) {
        if (root.left) {
            // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
            predecessor = root.left;
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
            }

            // 让 predecessor 的右指针指向 root，继续遍历左子树
            if (!predecessor.right) {
                predecessor.right = root;
                root = root.left;
            }
            // 说明左子树已经访问完了，我们需要断开链接
            else {
                arr.push(root.val);
                predecessor.right = null;
                root = root.right;
            }
        }
        // 如果没有左孩子，则直接访问右孩子
        else {
            arr.push(root.val);
            root = root.right;
        }
    }
    return arr
}

function inorderTraversalThree(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }
    let ans: number[] = []
    const db: (TreeNode | null)[] = []
    while (root || db.length) {
        while (root) {
            db.push(root)
            root = root.left
        }
        const root = db.pop()
        if (!root) {
            continue
        }
        ans.push(root.val)
        root = root.right
    }
    return ans
}