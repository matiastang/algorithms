/*
 * @Author: tangdaoyong
 * @Date: 2021-04-15 10:46:04
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-15 10:57:06
 * @Description: 打家劫舍
 */
/*
198. 打家劫舍
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

 

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 

提示：

0 <= nums.length <= 100
0 <= nums[i] <= 400

*/
/**
 * 动态规划
 * @param nums 
 * 执行用时：
104 ms
, 在所有 TypeScript 提交中击败了
13.76%
的用户
内存消耗：
39.1 MB
, 在所有 TypeScript 提交中击败了
90.48%
的用户
 */
function rob(nums: number[]): number {
    let ansArr = Array<number>(nums.length)
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            ansArr[i] = nums[i]
            continue
        }
        if (i === 1) {
            ansArr[i] = Math.max(nums[i], ansArr[i - 1])
            continue
        }
        ansArr[i] = Math.max(ansArr[i - 2] + nums[i], ansArr[i - 1])
    }
    if (ansArr.length <= 1) {
        return ansArr[0]
    }
    return Math.max(ansArr[nums.length - 2], ansArr[nums.length - 1])
}

/**
 * 动态规划使用两个变量
 * @param nums 
 * @returns 
 * 执行用时：
84 ms
, 在所有 TypeScript 提交中击败了
78.84%
的用户
内存消耗：
39.3 MB
, 在所有 TypeScript 提交中击败了
80.95%
的用户
 */
function robTwo(nums: number[]): number {
    if (nums.length <= 1) {
        return nums[0]
    }
    let ansLeft = 0
    let ansRight = 0
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            ansLeft = nums[i]
            continue
        }
        if (i === 1) {
            ansRight = Math.max(nums[i], ansLeft)
            continue
        }
        let temp = ansRight
        ansRight = Math.max(ansLeft + nums[i], ansRight)
        ansLeft = temp
    }
    return Math.max(ansLeft, ansRight)
}