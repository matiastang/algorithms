/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 15:53:49
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 16:22:36
 * @Description: 按摩师
 */
/*
面试题 17.16. 按摩师
一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

注意：本题相对原题稍作改动

 

示例 1：

输入： [1,2,3,1]
输出： 4
解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。
示例 2：

输入： [2,7,9,3,1]
输出： 12
解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。
示例 3：

输入： [2,1,4,5,3,1,1,3]
输出： 12
解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。
*/
function massage(nums: number[]): number {
    let leftSum = 0, rightSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            leftSum += nums[i]
        } else {
            rightSum += nums[i]
        }
    }
    // 这样解不能保证最大，可能中间放弃两个，或可以获取最大
    return Math.max(leftSum, rightSum)
};

/**
 * 动态规划
 * @param nums 
 * @returns 
 * 执行用时：84 ms, 在所有 TypeScript 提交中击败了85.71%的用户
 * 内存消耗：39.3 MB, 在所有 TypeScript 提交中击败了78.57%的用户
 */
function massageOne(nums: number[]): number {
    if (nums.length <= 0) {
        return 0
    }
    let dp = Array<number>(nums.length + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        if (i < 2) {
            dp[i + 1] = nums[i]
            continue
        }
        dp[i + 1] = Math.max(dp[i - 1] + nums[i], dp[i - 2] + nums[i])
    }
    return Math.max(dp[nums.length], dp[nums.length - 1])
};