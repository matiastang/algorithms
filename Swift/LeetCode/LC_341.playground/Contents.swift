/*
 * @Author: tangdaoyong
 * @Date: 2021-03-23 09:16:30
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-23 18:33:50
 * @Description: file content
 */
/*
341. 扁平化嵌套列表迭代器
给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。

列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。

 

示例 1:

输入: [[1,1],2,[1,1]]
输出: [1,1,2,1,1]
解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
示例 2:

输入: [1,[4,[6]]]
输出: [1,4,6]
解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。

*/
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     // Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public func isInteger() -> Bool
 *
 *     // Return the single integer that this NestedInteger holds, if it holds a single integer
 *     // The result is undefined if this NestedInteger holds a nested list
 *     public func getInteger() -> Int
 *
 *     // Set this NestedInteger to hold a single integer.
 *     public func setInteger(value: Int)
 *
 *     // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *     public func add(elem: NestedInteger)
 *
 *     // Return the nested list that this NestedInteger holds, if it holds a nested list
 *     // The result is undefined if this NestedInteger holds a single integer
 *     public func getList() -> [NestedInteger]
 * }
 */
class NestedInteger {
    // Return true if this NestedInteger holds a single integer, rather than a nested list.
    public func isInteger() -> Bool {
        return true
    }

    // Return the single integer that this NestedInteger holds, if it holds a single integer
    // The result is undefined if this NestedInteger holds a nested list
    public func getInteger() -> Int {
        return 0
    }

    // Set this NestedInteger to hold a single integer.
    public func setInteger(value: Int) {

    }

    // Set this NestedInteger to hold a nested list and adds a nested integer to it.
    public func add(elem: NestedInteger) {

    }

    // Return the nested list that this NestedInteger holds, if it holds a nested list
    // The result is undefined if this NestedInteger holds a single integer
    public func getList() -> [NestedInteger] {
        return []
    }
}

/**
 深度优先DFS
 */
class NestedIterator {

    var list = [Int]()

    init(_ nestedList: [NestedInteger]) {
        func dfs(_ inputList: [NestedInteger]) {
            for item in inputList {
                if item.isInteger() {
                    list.append(item.getInteger())
                } else {
                    dfs(item.getList())
                }
            }
        }
        dfs(nestedList)
    }
    
    func next() -> Int {
        let num = list.first
        if (list.count > 1) {
            list = Array(list[1...list.count - 1])
        } else {
            list = []
        }
        return num!
    }
    
    func hasNext() -> Bool {
        return list.count > 0
    }
}

/**
 * Your NestedIterator object will be instantiated and called as such:
 * let obj = NestedIterator(nestedList)
 * let ret_1: Int = obj.next()
 * let ret_2: Bool = obj.hasNext()
 */
