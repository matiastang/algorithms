/*
 * @Author: tangdaoyong
 * @Date: 2021-04-25 09:49:48
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-25 10:41:43
 * @Description: 组合总和 Ⅳ
 */
/*
377. 组合总和 Ⅳ
给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。

 

示例 1：

输入：nums = [1,2,3], target = 4
输出：7
解释：
所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
示例 2：

输入：nums = [9], target = 3
输出：0
 

提示：

1 <= nums.length <= 200
1 <= nums[i] <= 1000
nums 中的所有元素 互不相同
1 <= target <= 1000
 

进阶：如果给定的数组中含有负数会发生什么？问题会产生何种变化？如果允许负数出现，需要向题目中添加哪些限制条件？
*/
/**
 * 动态规划
 * @param nums 
 * @param target 
 * @returns 
 * 执行用时：92 ms, 在所有 TypeScript 提交中击败了58.33%的用户
 * 内存消耗：40.2 MB, 在所有 TypeScript 提交中击败了66.67%的用户
 */
function combinationSum4(nums: number[], target: number): number {
    let dp = Array<number>(target + 1).fill(0)
    // 表示target和某个num相等，只需要一步就的能到达
    dp[0] = 1
    // 排序
    nums = nums.sort((left, right) => {
        return left > right ? 1 : -1
    })
    // 循环获取1...target的对应结果
    for (let i = 1; i <= target; i++) {
        let ans = 0
        for (let j = 0; j < nums.length; j++) {
            let index = i - nums[j]
            // 这里需要注意，i=0表示target为1，nums[j]表示当前数字。所以是>=-1
            // 如果dp声明为target+1，则可使用i表示target为i的结果
            if (index >= 0) {
                ans += dp[index]
            } else {
                break
            }
        }
        dp[i] = ans
    }
    console.log(dp)
    // 输出目标结果
    return dp[target]
};