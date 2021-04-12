/*
 * @Author: tangdaoyong
 * @Date: 2021-04-12 09:20:17
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-12 10:05:14
 * @Description: 丑数 II
 */
/*
264. 丑数 II
给你一个整数 n ，请你找出并返回第 n 个 丑数 。

丑数 就是只包含质因数 2、3 和/或 5 的正整数。

 

示例 1：

输入：n = 10
输出：12
解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
示例 2：

输入：n = 1
输出：1
解释：1 通常被视为丑数。
 

提示：

1 <= n <= 1690
通过次数76,784提交次数135,181
*/
/**
 * 暴力解 超出时间限制
 * @param n 
 * @returns 
 */
function nthUglyNumber(n: number): number {
    let num = 0
    let ans = 0
    while (num < n) {
        if (isUgly(ans)) {
            num += 1
        }
        if (num < n) {
            ans += 1
        }
    }
    return ans
};

/**
 * 
 * @param n 
 * @returns 
 */
function nthUglyNumberOne(n: number): number {
    if (n < 3) {
        return n
    }
    if (n === 4) {
        return 5
    }
    let num = 4
    let ans = 5
    let tempArr = [2, 3, 5]
    while (num < n) {
        for (let i = 0; i < tempArr.length; i++) {
            const element = tempArr[i];
            if (element ) {

            }
        }
    }
    return ans
};

/**
 * n是不是丑数
 * @param n 
 * @returns 
 */
function isUgly(n: number): boolean {
    if (n <= 0) {
        return false
    }
    let num = 1
    while ((n & num) === 0) {
        n = n >> num
    }
    num = 3
    while ((n % num) === 0) {
        n /= num
    }
    num = 5
    while ((n % num) === 0) {
        n /= num
    }
    return n === 1
};