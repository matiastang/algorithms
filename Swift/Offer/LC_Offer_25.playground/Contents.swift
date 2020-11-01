import UIKit

/*
 剑指 Offer 25. 合并两个排序的链表
 
 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

 示例1：

 输入：1->2->4, 1->3->4
 输出：1->1->2->3->4->4
 限制：

 0 <= 链表长度 <= 1000

 注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */
public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init(_ val: Int) {
        self.val = val
        self.next = nil
    }
}
class Solution {
    func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        guard let l1 = l1 else {
            return l2
        }
        guard let l2 = l2 else {
            return l1
        }
        if l1.val <= l2.val {
            let l1_next = l1.next
            l1.next = mergeTwoLists(l1_next, l2)
            return l1
        }
        let l2_next = l2.next
        l2.next = mergeTwoLists(l1, l2_next)
        return l2
    }
}
