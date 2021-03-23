/*
 * @Author: tangdaoyong
 * @Date: 2021-03-23 09:16:30
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-23 18:31:32
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
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */
class NestedInteger {

    constructor(value?: number) {
    };

    isInteger(): boolean {
        return true
    };

    getInteger(): number | null {
        return null
    };

    setInteger(value: number) {

    };

    add(elem: NestedInteger) {

    };

    getList(): NestedInteger[] {
        return []
    };
};

/**
 * DFS深度优先
 */
class NestedIterator {

    list = Array<number>()

    constructor(nestedList: NestedInteger[]) {

        let getNestedIntegerArr = (inputList: NestedInteger[]) => {
            for (let i = 0; i < inputList.length; i++) {
                const element = inputList[i];
                if (element.isInteger()) {
                    let value = element.getInteger()
                    if (value !== null) {
                        this.list.push(value)
                    }
                } else {
                    getNestedIntegerArr(element.getList());
                }
            }
        }
		getNestedIntegerArr(nestedList)
    }

    hasNext(): boolean {
		return this.list.length > 0
    }

	next(): number {
        return this.list.unshift()
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */