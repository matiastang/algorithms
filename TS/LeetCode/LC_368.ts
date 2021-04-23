/*
 * @Author: tangdaoyong
 * @Date: 2021-04-23 09:45:03
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-23 11:17:38
 * @Description: 最大整除子集
 */
/*
368. 最大整除子集
给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：
answer[i] % answer[j] == 0 ，或
answer[j] % answer[i] == 0
如果存在多个有效解子集，返回其中任何一个均可。

 

示例 1：

输入：nums = [1,2,3]
输出：[1,2]
解释：[1,3] 也会被视为正确答案。
示例 2：

输入：nums = [1,2,4,8]
输出：[1,2,4,8]
 

提示：

1 <= nums.length <= 1000
1 <= nums[i] <= 2 * 109
nums 中的所有整数 互不相同
*/
/**
 * 暴力解
 * @param nums 
 * @returns 
 */
function largestDivisibleSubset(nums: number[]): number[] {
    // 排序
    nums = nums.sort((left: number, right: number) => {
        return left > right ? -1 : 1
    })
    let ans = Array<number>()
    for (let i = 0; i < nums.length; i++) {
        let arr = Array<number>()
        arr.push(nums[i])
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] % arr[arr.length - 1] === 0) {
                arr.push(nums[j])
            }
        }
        if (arr.length > ans.length) {
            ans = arr
        }
    }
    return ans
};

/**
 * 动态规划
 * @param nums 
 * @returns 
 * 执行用时：124 ms, 在所有 TypeScript 提交中击败了100.00%的用户
 * 内存消耗：41.1 MB, 在所有 TypeScript 提交中击败了100.00%的用户
 */
function largestDivisibleSubsetOne(nums: number[]): number[] {
    // 排序
    nums = nums.sort((left: number, right: number) => {
        return left > right ? 1 : -1
    })
    console.log(nums)
    // 第 1 步：动态规划找出最大子集的个数、最大子集中的最大整数
    let maxIndex = 0
    let max = 1
    let ans = Array<number>(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // 题目中说「没有重复元素」很重要
            if (nums[i] % nums[j] === 0) {
                if (ans[j] + 1 > ans[i]) {
                    ans[i] = ans[j] + 1
                }
            }
        }
        if (ans[i] > max) {
            max = ans[i]
            maxIndex = i
        }
    }
    console.log(ans)
    // 到了这一步就能拿到最大子集个数
    // 第 2 步：倒推获得最大子集
    if (max === 1) {
        return [nums[0]]
    }
    let ansArr = Array<number>()
    let maxValue = nums[maxIndex]
    for (let i = maxIndex - 1; i >= 0; i--) {
        if (maxValue % nums[i] === 0 && ans[i] === max) {
            ansArr.unshift(nums[i])
            maxValue = nums[i]
            max -= 1
        }
    }
    console.log(ansArr)
    return ansArr
};