/*
 * @Author: tangdaoyong
 * @Date: 2021-03-08 23:19:37
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-09 09:26:44
 * @Description: 最大子序和
 */
/*
53. 最大子序和
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [0]
输出：0
示例 4：

输入：nums = [-1]
输出：-1
示例 5：

输入：nums = [-100000]
输出：-100000
 

提示：

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
*/
function maxSubArrayOne(nums: number[]): number {
    let maxNum = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (i === 0) {
            maxNum = element
            continue
        }
        if (element < 0) {
            if (maxNum > element) {
                maxNum += element
            } else {
                maxNum = element
            }
        } else {
            maxNum += element
        }
        // if (maxNum <= element) {
        //     if (maxNum < 0) {
        //         maxNum = element
        //     } else {
        //         maxNum += element
        //     }
        // } else {
        //     if (element < 0) {
        //         maxNum = element
        //     } else {
        //         maxNum += element
        //     }
        //     maxNum += element
        // }
    }
    return maxNum
};

/**
 * 动态规划
 * @param nums 
 * 执行用时：
84 ms
, 在所有 TypeScript 提交中击败了
94.27%
的用户
内存消耗：
39.5 MB
, 在所有 TypeScript 提交中击败了
99.12%
的用户

 */
function maxSubArrayTwo(nums: number[]): number {
    let temp = nums[0], max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const item = nums[i]
        temp = Math.max(max + item, item)
        max = Math.max(max, temp)
    }
    return max
}