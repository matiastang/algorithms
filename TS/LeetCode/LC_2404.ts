/*
 * @Author: tangdaoyong
 * @Date: 2023-04-13 22:06:09
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-04-13 22:59:44
 * @Description: 2404. 出现最频繁的偶数元素
/*
2404. 出现最频繁的偶数元素
给你一个整数数组 nums ，返回出现最频繁的偶数元素。

如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。

 

示例 1：

输入：nums = [0,1,2,2,4,4,1]
输出：2
解释：
数组中的偶数元素为 0、2 和 4 ，在这些元素中，2 和 4 出现次数最多。
返回最小的那个，即返回 2 。
示例 2：

输入：nums = [4,4,4,9,2,4]
输出：4
解释：4 是出现最频繁的偶数元素。
示例 3：

输入：nums = [29,47,21,41,13,37,25,7]
输出：-1
解释：不存在偶数元素。
 

提示：

1 <= nums.length <= 2000
0 <= nums[i] <= 105
*/
function mostFrequentEven(nums: number[]): number {
    let ans = -1
    const dp = Array(25000)
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        const j = item / 2
        if (item & 1) {
            continue
        }
        if (ans === -1) {
            dp[j] = 1
            ans = j
            continue
        }
        if (dp[j]) {
            dp[j] += 1
            if (dp[j] > dp[ans]) {
                ans = j
            } else if (dp[j] === dp[ans]) {
                ans = Math.min(j, ans)
            }
        } else {
            dp[j] = 1
            if (dp[j] === dp[ans]) {
                ans = Math.min(j, ans)
            }
        }
    }
    return ans !== -1 ? ans * 2 : -1
};

function mostFrequentEvenOne(nums: number[]): number {
    const dp = {}
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        if (item & 1) {
            continue
        }
        if (dp[nums[i]]) {
            dp[nums[i]] += 1
        } else {
            dp[nums[i]] = 1
        }
    }
    const sort = Object.keys(dp).sort((left, right) => {
        if (dp[left] > dp[right]) {
            return -1
        } else if (dp[left] < dp[right]) {
            return 1
        }
        return Number(left) - Number(right)
    })
    return sort.length > 0 ? Number(sort[0]) : -1
};

function mostFrequentEvenTwo(nums: number[]): number {
    let ans = -1
    const dp = {}
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        if (item & 1) {
            continue
        }
        if (dp[nums[i]]) {
            dp[nums[i]] += 1
            if (dp[nums[i]] > dp[ans]) {
                ans = nums[i]
            } else if (dp[nums[i]] === dp[ans]) {
                ans = Math.min(nums[i], ans)
            }
        } else {
            dp[nums[i]] = 1
            if (ans === -1) {
                ans = nums[i]
                continue
            }
            if (dp[nums[i]] === dp[ans]) {
                ans = Math.min(nums[i], ans)
            }
        }
    }
    return ans
};