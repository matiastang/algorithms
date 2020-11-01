import UIKit

/*
 2. 两数相加
 
 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 示例：

 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 输出：7 -> 0 -> 8
 原因：342 + 465 = 807

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/add-two-numbers
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */

public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}

class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        guard let l1 = l1 else {
            return l2
        }
        guard let l2 = l2 else {
            return l1
        }
        
        func lastListNode(_ ll: ListNode?, _ add:Bool = false) -> ListNode? {
            if !add {
                return ll
            }
            guard let ll = ll else {
                return ListNode(1)
            }
            let list = ListNode()
            var value = ll.val
            if (add) {
                value += 1
            }
            let nextAdd = value >= 10
            if nextAdd {
                list.val = value % 10
            } else {
                list.val = value
            }
            list.next = lastListNode(ll.next, nextAdd)
            return list
        }
        
        func nextListNode(_ l1: ListNode?, _ l2: ListNode?, _ add:Bool = false) -> ListNode? {
            if l1 == nil && l2 == nil {
                if add {
                    return ListNode(1)
                }
                return nil
            }
            guard let l1 = l1 else {
                return lastListNode(l2, add)
            }
            guard let l2 = l2 else {
                return lastListNode(l1, add)
            }
            let list = ListNode()
            var value = l1.val + l2.val
            if (add) {
                value += 1
            }
            let nextAdd = value >= 10
            if nextAdd {
                list.val = value % 10
            } else {
                list.val = value
            }
            list.next = nextListNode(l1.next, l2.next, nextAdd)
            return list
        }
        
        let list = ListNode()
        let value = l1.val + l2.val
        let add = value >= 10
        if add {
            list.val = value % 10
        } else {
            list.val = value
        }
        list.next = nextListNode(l1.next, l2.next, add)
        return list
        
//        var list:ListNode? = nil
//        var resList:ListNode? = nil
//        var next1 = l1
//        var next2 = l2
//
//        var upNumber = false
//        while next1.next != nil && next2.next != nil {
//            let value = next1.val + next2.val + (upNumber ? 1 : 0)
//            if value > 10 {
//                upNumber = true
//            } else {
//                upNumber = false
//            }
//            if list == nil {
//                list = ListNode(value % 10)
//                resList = list
//            }
//            if next1.next == nil && next2.next != nil {
//                if upNumber {
//
//                    list?.next?.val += 1
//                } else {
//                    list?.next = next2
//                }
//            }
//            if next1.next != nil && next2.next == nil {
//                if upNumber {
//                    list?.next?.val += 1
//                } else {
//                    list?.next = next1
//                }
//            }
//            next1 = l1.next!
//            next2 = l2.next!
//            list?.next = ListNode(value % 10)
//        }
//
//        return resList
    }
}



func add(_ list:ListNode) ->ListNode {
    var addList = list
    var tempList = list
    while tempList.next != nil {
        let value = tempList.val + 1
        if value > 10 {
            tempList.val = value % 10
        } else {
            tempList.val = value
            break
        }
    }
    return addList
}
