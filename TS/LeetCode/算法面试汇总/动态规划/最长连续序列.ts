/*
 * @Author: tangdaoyong
 * @Date: 2021-06-09 21:11:56
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-09 23:05:40
 * @Description: 最长连续序列
 */
/*
最长连续序列
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
 
提示：

0 <= nums.length <= 104
-109 <= nums[i] <= 109

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions/x2xmre/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
/**
 * 先排序，后面就变成了递增数组找最长连续序列
 * @param nums 
 * @returns 
 */
function longestConsecutive(nums: number[]): number {
    // 排序
    nums = nums.sort((left, right) => {
        return left - right
    })
    // let dp = Array<number>(nums.length).fill(0)
    // for (let i = 0; i < nums.length; i++) {
    //     if (i === 0) {
    //         dp[i] = 1
    //         continue
    //     }
    //     if (nums[i] === nums[i - 1] + 1) {
    //         dp[i] = dp[i - 1] + 1
    //     } else {
    //         dp[i] = 1
    //     }
    // }
    // // 再找最大值
    // 动态规划找递增数组找最长连续序列
    let tempValue = 0, tempCount = 1,  maxCount = 0
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            tempValue = nums[i]
            maxCount = 1
            continue
        }
        if (nums[i] === tempValue + 1) {
            tempCount += 1
            tempValue = nums[i]
            if (tempCount > maxCount) {
                maxCount = tempCount
            }
        } else if (nums[i] === tempValue) {
            continue
        } else {
            tempValue = nums[i]
            tempCount = 1
        }
    }
    return maxCount
};

/**
 * 使用Set数据结构，优化搜索时间
 * @param nums 
 * @returns 
 */
function longestConsecutiveOne(nums: number[]): number {
    let numSet = new Set<number>(nums), ans = 0
    for (const value of numSet) {// 迭代Set
        if (!numSet.has(value - 1)) {// 找到以value为开始的最大连续个数
            let max = 1, num = value;
            while (numSet.has(num + 1)) {
                max += 1
                num += 1
            }
            if (max > ans) {// 动态更新答案
                ans = max
            }
        }
    }
    return ans
}