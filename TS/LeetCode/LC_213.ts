/*
 * @Author: tangdaoyong
 * @Date: 2021-04-15 09:10:56
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-15 11:25:12
 * @Description: 打家劫舍 II
 */
/*
213. 打家劫舍 II
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。

 

示例 1：

输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
示例 2：

输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 3：

输入：nums = [0]
输出：0
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 1000
*/
/**
 * 连续偷间隔偷，这个思路有问题，有可能两个大的值，不间隔，但连续偷间隔偷分开了两个大的值
 * @param nums 
 * @returns 
 */
function rob(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }
    let firstAll = 0, secondAll = 0
    if (nums.length % 2 === 0) {// 总数为偶数
        for (let i = 0; i < nums.length; i++) {
            if (i % 2 === 0 ) {
                firstAll += nums[i]
            } else {
                secondAll += nums[i]
            }
        }
        return Math.max(firstAll, secondAll)
    }
    for (let i = 1; i < nums.length - 1; i++) {
        if (i % 2 === 0 ) {
            firstAll += nums[i]
        } else {
            secondAll += nums[i]
        }
    }
    // 添加末尾或首部
    firstAll += Math.max(nums[0], nums[nums.length - 1])
    return Math.max(firstAll, secondAll)
};

/**
 * 动态规划
 * @param nums 
 * @returns 
 */
function robOne(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }
    /**
     * i位时，包含i-1位的，最大值，即不可以加上i位
     */
    let rightMax = nums[1]
    /**
     * i位时，不包含i-1位的，最大值，即可以加上i位
     */
    let leftMax = nums[0]
    /**
     * 是否偷了第一个，null表示没有偷，true表示leftMax偷了，false表示rightMax偷了
     */
    let first: boolean | null = true
    for (let i = 2; i < nums.length; i++) {
        let temp = leftMax + nums[i]
        if (i === nums.length - 1 && first) {
            if (nums[0] >= nums[i]) {
                temp = leftMax
            } else {
                temp -= nums[0] 
            }
        }
        if (temp > rightMax) {
            leftMax = rightMax
            rightMax = temp
            if (first != null) {
                first = !first
            }
        } else {
            leftMax = rightMax
            if (i === 2) {
                first = null
            }
            if (first === 1) {
                first = 0
            }
            if (first === 2) {
                first = 1
            }
        }
        // [leftMax, rightMax] = [rightMax, leftMax + nums[i]]
    }
    return Math.max(leftMax, rightMax)
};

/**
 * 
 * @param nums 
 */
function robTwo(nums: number[]): number {
    let ansArr = Array<number>(nums.length)
    let firstArr = Array<Boolean>(nums.length).fill(false)
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            ansArr[i] = nums[i]
            firstArr[i] = true
            continue
        }
        if (i === 1) {
            if (nums[i] >= ansArr[i - 1]) {
                ansArr[i] = nums[i]
            } else {
                ansArr[i] = ansArr[i - 1]
                firstArr[i] = firstArr[i - 1]
            }
            // ansArr[i] = Math.max(nums[i], ansArr[i - 1])
            continue
        }
        let temp = ansArr[i - 2] + nums[i]
        if (firstArr[i - 2]) {
            temp -= nums[i]
        }
        if (temp >= ansArr[i - 1]) {
            ansArr[i] = temp
            firstArr[i] = firstArr[i - 2]
        } else {
            ansArr[i] = ansArr[i - 1]
            firstArr[i] = firstArr[i - 1]
        }
        // ansArr[i] = Math.max(ansArr[i - 2] + nums[i], ansArr[i - 1])
    }
    if (ansArr.length <= 1) {
        return ansArr[0]
    }
    let temp = ansArr[nums.length - 1]
    if (firstArr[firstArr.length - 1]) {
        if (nums[0] >= nums[nums.length - 1]) {
            temp -= nums[nums.length - 1]
        } else {
            temp
        }
        temp -= Math.min(nums[0], nums[nums.length - 1])
    }
    return Math.max(ansArr[nums.length - 2], temp)
    // return Math.max(ansArr[nums.length - 2], ansArr[nums.length - 1])
}

function robThree(nums: number[]): number {
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

/**
 * 题解，分别动态规划包含第一个不包含最后一个，和不包含第一个包含最后一个。取大的一个。
 * @param nums 
 * @returns 
 * 执行用时：
88 ms
, 在所有 TypeScript 提交中击败了
65.96%
的用户
内存消耗：
39.2 MB
, 在所有 TypeScript 提交中击败了
91.49%
的用户
 */
function robFour(nums: number[]): number {
    if (nums.length <= 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }
    return Math.max(robRange(nums, true), robRange(nums, false))
}

function robRange(nums: number[], robFirst: boolean): number {
    let ansLeft = 0
    let ansRight = 0
    if (robFirst) {
        for (let i = 0; i < nums.length - 1; i++) {
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
    for (let i = 1; i < nums.length; i++) {
        if (i === 1) {
            ansLeft = nums[i]
            continue
        }
        if (i === 2) {
            ansRight = Math.max(nums[i], ansLeft)
            continue
        }
        let temp = ansRight
        ansRight = Math.max(ansLeft + nums[i], ansRight)
        ansLeft = temp
    }
    return Math.max(ansLeft, ansRight)
}