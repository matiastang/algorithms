/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 15:30:48
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 15:50:37
 * @Description: 连续数列
 */
/*
面试题 16.17. 连续数列
给定一个整数数组，找出总和最大的连续数列，并返回总和。

示例：

输入： [-2,1,-3,4,-1,2,1,-5,4]
输出： 6
解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶：

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*/
/**
 * 暴力解
 * @param nums 
 */
function maxSubArray(nums: number[]): number {
    let ans = Number.MIN_VALUE
    for (let i = 0; i < nums.length; i++) {
        let temp = 0
        for (let j = i; j < nums.length; j++) {
            temp += nums[j]
            if (temp > ans) {
                ans = temp
            }
        }
    }
    return ans
};

/**
 * 动态规划
 * @param nums 
 * @returns 
 * 执行用时：104 ms, 在所有 TypeScript 提交中击败了16.13%的用户
 * 内存消耗：39.6 MB, 在所有 TypeScript 提交中击败了87.10%的用户
 */
function maxSubArrayOne(nums: number[]): number {
    let ans = nums[0]// i之前的最大值
    let max = nums[0]// 已i结尾的最大值
    for (let i = 1; i < nums.length; i++) {
        if (max > 0) {
            max += nums[i]
        } else {
            max = nums[i]
        }
        if (max > ans) {
            ans = max
        }
    }
    return ans
};