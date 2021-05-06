/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 10:08:32
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 10:31:20
 * @Description: 爬楼梯
 */
/*
70. 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
*/
/*
总结
这里形成的数列正好是斐波那契数列，答案要求的 f(n)f(n) 即是斐波那契数列的第 nn 项（下标从 00 开始）。我们来总结一下斐波那契数列第 nn 项的求解方法：

* nn 比较小的时候，可以直接使用过递归法求解，不做任何记忆化操作，时间复杂度是 O(2^n)O(2 
n
 )，存在很多冗余计算。
* 一般情况下，我们使用「记忆化搜索」或者「迭代」的方法，实现这个转移方程，时间复杂度和空间复杂度都可以做到 O(n)O(n)。
* 为了优化空间复杂度，我们可以不用保存 f(x - 2)f(x−2) 之前的项，我们只用三个变量来维护 f(x)f(x)、f(x - 1)f(x−1) 和 f(x - 2)f(x−2)，你可以理解成是把「滚动数组思想」应用在了动态规划中，也可以理解成是一种递推，这样把空间复杂度优化到了 O(1)O(1)。
* 随着 nn 的不断增大 O(n)O(n) 可能已经不能满足我们的需要了，我们可以用「矩阵快速幂」的方法把算法加速到 O(\log n)O(logn)。
* 我们也可以把 nn 代入斐波那契数列的通项公式计算结果，但是如果我们用浮点数计算来实现，可能会产生精度误差。
*/
/**
 * 动态规划
 * @param n 
 * 执行用时：84 ms, 在所有 TypeScript 提交中击败了78.68%的用户
 * 内存消耗：39.4 MB, 在所有 TypeScript 提交中击败了34.27%的用户
 */
function climbStairs(n: number): number {
    let dp = Array<number>(n + 1).fill(0)
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

/**
 * 
 * @param n 
 * @returns 
 * 执行用时：88 ms, 在所有 TypeScript 提交中击败了54.06%的用户
 * 内存消耗：39.4 MB, 在所有 TypeScript 提交中击败了52.54%的用户
 */
function climbStairsOne(n: number): number {
    if (n <= 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    let left = 1
    let right = 2
    for (let i = 3; i <= n; i++) {
        let temp = left + right
        left = right
        right = temp
    }
    return right
};