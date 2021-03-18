/*
 * @Author: tangdaoyong
 * @Date: 2021-03-18 09:03:39
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-18 22:37:02
 * @Description: 反转链表 II
 */
/*
92. 反转链表 II
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
*/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * 使用两个循环（效率比较低，而且需要考虑一些特殊情况）
 * @param head 
 * @param left 
 * @param right 
 * @returns 
 * 执行用时：
104 ms
, 在所有 TypeScript 提交中击败了
13.51%
的用户
内存消耗：
39.4 MB
, 在所有 TypeScript 提交中击败了
74.32%
的用户
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    // 特殊情况处理
    if (left === right) {
        return head
    }
    let runNumber = 0
    let leftNode:ListNode | null = null
    let rightNode:ListNode | null = null
    let pointer = head
    // 选择出节点并入栈
    let tempArr = Array<ListNode | null>()
    while (runNumber < right) {
        if (runNumber < left - 1) {
            leftNode = pointer
            pointer = pointer.next
            runNumber += 1
            if (runNumber === left - 1) {
                leftNode.next = null
            }
            continue
        }
        let temp = pointer
        pointer = pointer.next
        temp.next = null
        tempArr.push(temp)
        if (runNumber === right - 1) {
            rightNode = pointer
        }
        runNumber += 1
    }
    // 出栈翻转
    while (tempArr.length > 0) {
        if (leftNode === null) {
            leftNode = tempArr.pop()
            head = leftNode
        } else {
            leftNode.next = tempArr.pop()
            leftNode = leftNode.next
        }
    }
    leftNode.next = rightNode
    return head
};

function reverseBetweenOne(head: ListNode | null, left: number, right: number): ListNode | null {
    // 特殊情况处理
    if (left === right) {
        return head
    }
    if (head.next === null) {
        return head
    }
    // 循环移动
    let leftNode:ListNode | null = null
    if (left > 1) {
        leftNode = head
    }
    let rightNode:ListNode | null = head.next
    let leftTempNode:ListNode | null = head
    let rightTempNode:ListNode | null = head.next
    while (left < right) {
        if (right > 1) {
            rightNode = rightNode.next
            rightTempNode = rightTempNode.next
            right -= 1
            if (left === 1) {
                let temp = rightTempNode
                rightTempNode.next = rightNode
                rightNode = temp
                rightTempNode = temp.next
            }
        }
        if (left > 1) {
            leftNode = leftNode.next
            leftTempNode = leftTempNode.next
            left -= 1
            if (left === 1) {
                leftNode.next = null
                leftTempNode.next = null
            }
        }
    }
    console.log(leftNode)
    console.log(rightNode)
    console.log(leftTempNode)
    console.log(rightTempNode)
    return head
}

function reverseBetweenTwo(head: ListNode | null, left: number, right: number): ListNode | null {
    // 特殊情况处理
    if (left === right) {
        return head
    }
    let temp = new ListNode()
    temp.next = head
    let pre = temp;
    for (let i = 0; i < left - 1; ++i) {
        pre = pre.next;
    }

    let cur = pre.next;
    for (let i = 0; i < right - left; ++i) {
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return temp.next
}