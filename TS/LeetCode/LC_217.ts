/*
 * @Author: tangdaoyong
 * @Date: 2021-04-19 09:45:19
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-19 10:33:07
 * @Description: 存在重复元素
 */
/*
217. 存在重复元素
给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

 

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
*/
/**
 * 先排序在遍历(排序的时候就可以判断是否有相同的了，有个问题就是确定了有相同的之后，没有退出排序，可以自己写排序)
 * @param nums 
 * 执行用时：92 ms, 在所有 TypeScript 提交中击败了81.70%的用户
 * 内存消耗：41.6 MB, 在所有 TypeScript 提交中击败了92.86%的用户
 */
function containsDuplicate(nums: number[]): boolean {
    let repetition = false
    nums.sort((left, right) => {
        if (left > right) {
            return 1
        } else if (left < right) {
            return -1
        } else {
            repetition = true
            return 0
        }
    })
    return repetition
};

/**
 * 哈希表
 * @param nums 
 * @returns 
 * 执行用时：96 ms, 在所有 TypeScript 提交中击败了67.86%的用户
 * 内存消耗：44.1 MB, 在所有 TypeScript 提交中击败了51.34%的用户
 */
function containsDuplicateOne(nums: number[]): boolean {
    let tempSet = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
        if (tempSet.has(nums[i])) {
            return true
        }
        tempSet.add(nums[i])
    }
    return false
};