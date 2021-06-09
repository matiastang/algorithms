/*
 * @Author: tangdaoyong
 * @Date: 2021-06-09 21:49:11
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-09 22:41:57
 * @Description: 完全平方数
 */
/*
完全平方数
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

 

示例 1：

输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
示例 2：

输入：n = 13
输出：2
解释：13 = 4 + 9
 
提示：

1 <= n <= 104

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions/x2959v/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
/**
 * 错误，不一定是最少的结果
 * @param n 
 * @returns 
 */
function numSquares(n: number): number {
    let temp = n, ans = 0
    while (temp > 0) {
        let num = Math.floor(Math.sqrt(temp))
        temp -= num * num
        ans += 1
    }
    return ans
};

/**
 * 动态规划
 * @param n 
 * @returns 
 * 执行用时：224 ms, 在所有 TypeScript 提交中击败了60.40%的用户
 * 内存消耗：41.9 MB, 在所有 TypeScript 提交中击败了83.17%的用户
 */
function numSquaresOne(n: number): number {

    let dp = Array<number>(n + 1).fill(0), tempArr = Array<number>()
    // 向下取整，找出可能的最大值，使其num * num <= n <= (num + 1) * (num + 1)
    let num = Math.floor(Math.sqrt(n))
    // 找出n之前，所以的平方和
    for (let i = 1; i <= num; i++) {
        tempArr.push(i * i)
    }
    /**
     * 核心思想是：index位置的最小值，为index-1,index-4,index-9...,index-x
     * 直到index-x>=0&&index-(x的下一个)<=0
     * dp声明为n+1,则下标就对应数，不用考虑偏移
     */
    for (let i = 1; i <= n; i++) {
        let min = Number.MAX_SAFE_INTEGER
        for (let j = 0; j < tempArr.length; j++) {
            if (i - tempArr[j] >= 0) {
                if (dp[i - tempArr[j]] < min) {
                    min = dp[i - tempArr[j]] + 1
                }
            } else {
                break
            }
        }
        dp[i] = min
    }
    console.log(dp)
    // dp[n]即为组成n的最小个数
    return dp[dp.length - 1]
};