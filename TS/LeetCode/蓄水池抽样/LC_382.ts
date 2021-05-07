/*
 * @Author: tangdaoyong
 * @Date: 2021-05-07 09:41:25
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-07 10:20:29
 * @Description: 链表随机节点
 */
/*
382. 链表随机节点
给定一个单链表，随机选择链表的一个节点，并返回相应的节点值。保证每个节点被选的概率一样。

进阶:
如果链表十分大且长度未知，如何解决这个问题？你能否使用常数级空间复杂度实现？

示例:

// 初始化一个单链表 [1,2,3].
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
Solution solution = new Solution(head);

// getRandom()方法应随机返回1,2,3中的一个，保证每个元素被返回的概率相等。
solution.getRandom();
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
import ListNode from '../ListNode'
/**
 * 数组缓存
 * 执行用时：132 ms, 在所有 TypeScript 提交中击败了66.67%的用户
 * 内存消耗：44.4 MB, 在所有 TypeScript 提交中击败了100.00%的用户
 */
class Solution {

    values = Array<number>()

    constructor(head: ListNode | null) {
        while (head) {
            this.values.push(head.val)
            head = head.next
        }
    }

    getRandom(): number {
        /*
        Math.ceil(Math.random()*10);     // 获取从 1 到 10 的随机整数，取 0 的概率极小。
        Math.round(Math.random());       // 可均衡获取 0 到 1 的随机整数。
        Math.floor(Math.random()*10);    // 可均衡获取 0 到 9 的随机整数。
        Math.round(Math.random()*10);    // 基本均衡获取 0 到 10 的随机整数，其中获取最小值 0 和最大值 10 的几率少一半。
        */
        // 长度异常处理
        let index = Math.floor(Math.random()*this.values.length)
        return this.values[index]
    }
}

/**
 * 蓄水池采样算法
 * 执行用时：128 ms, 在所有 TypeScript 提交中击败了100.00%的用户
 * 内存消耗：45.2 MB, 在所有 TypeScript 提交中击败了33.33%的用户
 */
class SolutionOne {

    head: ListNode | null

    constructor(head: ListNode | null) {
        this.head = head
    }

    getRandom(): number {
        let ans = 0, count = 0
        let first = this.head
        while (first) {
            count += 1
            let index = Math.floor(Math.random() * count)
            if (index === 0) {// 模拟1/n的概率
                ans = first.val
            }
            first = first.next
        }
        return ans
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */