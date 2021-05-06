/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 14:29:03
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 15:11:59
 * @Description: 除数博弈
 */
/*
1025. 除数博弈
爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

选出任一 x，满足 0 < x < N 且 N % x == 0 。
用 N - x 替换黑板上的数字 N 。
如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 False。假设两个玩家都以最佳状态参与游戏。

 

示例 1：

输入：2
输出：true
解释：爱丽丝选择 1，鲍勃无法进行操作。
示例 2：

输入：3
输出：false
解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
 

提示：

1 <= N <= 1000
*/
function divisorGame(n: number): boolean {
    let ans = false
    while (n > 1) {
        // 此处找的是最大除数，不能体现出最佳状态
        for (let i = n - 1; i >= 1; i--) {
            if (n % i === 0) {
                n -= i
                ans = !ans
                continue
            }
        }
    }
    return ans
};

/**
 * 动态规划
 * @param n 
 * @returns 
 * 执行用时：96 ms, 在所有 TypeScript 提交中击败了32.50%的用户
 * 内存消耗：39.6 MB, 在所有 TypeScript 提交中击败了45.00%的用户
 */
function divisorGameOne(n: number): boolean {
    let dp = Array<boolean>(n + 1).fill(false)
    dp[2] = true
    for (let i = 3; i < dp.length; i++) {
        /*
        * 当上一个是false,则为true。因为可以通过（i - 1）+ 1 = i来测到
        */
        if (!dp[i - 1]) {
            dp[i] = true
            continue
        }
        /**
         * 只要有一个除数的false则，为true
         */
        let temp = false
        for (let j = i - 1; j > 1; j--) {
            if (i % j === 0 && dp[i - j] === false) {
                temp = true
                continue
            }
        }
        dp[i] = temp
    }
    return dp[n]
};