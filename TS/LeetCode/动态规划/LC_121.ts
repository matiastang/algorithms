/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 10:44:15
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 11:36:07
 * @Description: 买卖股票的最佳时机
 */
/*
121. 买卖股票的最佳时机
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

 

示例 1：

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 

提示：

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/
/**
 * 暴力解-超出时间限制
 * @param prices 
 * @returns 
 */
function maxProfit(prices: number[]): number {
    let ans = 0
    for (let i = 0; i < prices.length; i++) {
        const left = prices[i]// 买
        for (let j = i + 1; j < prices.length; j++) {
            const right = prices[j];// 卖
            if (right - left > ans) {
                ans = right - left
            }
        }
    }
    return ans
};
/**
 * 动态规划
 * @param prices 
 * 执行用时：112 ms, 在所有 TypeScript 提交中击败了81.27%的用户
 * 内存消耗：48 MB, 在所有 TypeScript 提交中击败了72.38%的用户
 */
function maxProfitOne(prices: number[]): number {
    let ans = 0// 结果
    let min = 0// 前面i天的最低值
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > ans) {
            ans = prices[i] - min
        }
        if (min > prices[i]) {
            min = prices[i]
        }
    }
    return ans
};