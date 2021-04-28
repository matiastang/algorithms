/*
 * @Author: tangdaoyong
 * @Date: 2021-04-28 09:26:46
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-28 14:26:45
 * @Description: 平方数之和
 */
/*
633. 平方数之和
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

 

示例 1：

输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
示例 2：

输入：c = 3
输出：false
示例 3：

输入：c = 4
输出：true
示例 4：

输入：c = 2
输出：true
示例 5：

输入：c = 1
输出：true
 

提示：

0 <= c <= 231 - 1
*/
/**
 * 暴力解，加了缓存还是超出时间限制
 * @param c 
 * @returns 
 */
function judgeSquareSum(c: number): boolean {
    // let num = Math.ceil(c / 2)
    let num = Math.floor(Math.sqrt(c))
    // 缓存
    let tempArr = Array<number>(num + 1).fill(-1)
    for (let i = 0; i <= num; i++) {
        for (let j = num; j >= 0; j--) {
            // console.log(`i=${i},j=${j}`)
            let left = tempArr[i]
            if (left < 0) {
                left = i * i
            }
            let right = tempArr[j]
            if (right < 0) {
                right = j * j
            }
            // console.log(`left=${left},right=${right}`)
            if (left + right === c) {
                return true
            }
        }
    }
    return false
};

/**
 * 暴力解
 * @param c 
 * @returns 
 * 执行用时：84 ms, 在所有 TypeScript 提交中击败了96.77%的用户
 * 内存消耗：39.5 MB, 在所有 TypeScript 提交中击败了93.55%的用户
 */
function judgeSquareSumOne(c: number): boolean {
    for (let i = 0; i * i <= c; i++) {
        let b = Math.sqrt(c - i * i)
        if (b == Math.ceil(b)) {
            return true
        }
    }
    return false
}

/**
 * 双指针
 * @param c 
 * @returns 
 * 执行用时：96 ms, 在所有 TypeScript 提交中击败了58.06%的用户
 * 内存消耗：39.5 MB, 在所有 TypeScript 提交中击败了83.87%的用户
 */
function judgeSquareSumTwo(c: number): boolean {
    let a = 0, b = Math.floor(Math.sqrt(c))
    while (a <= b) {
        let num = a * a + b * b
        if (num < c) {
            a += 1
            continue
        } else if (num > c) {
            b -= 1
            continue
        }
        return true
    }
    return false
}

// 费马平方和定理告诉我们：
// 一个非负整数 cc 如果能够表示为两个整数的平方和，当且仅当 cc 的所有形如 4k + 34k+3 的质因子的幂均为偶数。