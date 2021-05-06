/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 11:37:26
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 13:57:36
 * @Description: 判断子序列
 */
/*
392. 判断子序列
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

进阶：

如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

致谢：

特别感谢 @pbrother 添加此问题并且创建所有测试用例。

 

示例 1：

输入：s = "abc", t = "ahbgdc"
输出：true
示例 2：

输入：s = "axc", t = "ahbgdc"
输出：false
 

提示：

0 <= s.length <= 100
0 <= t.length <= 10^4
两个字符串都只由小写字符组成。
*/
/**
 * 
 * @param s 
 * @param t 
 * @returns 
 * 执行用时：92 ms, 在所有 TypeScript 提交中击败了64.41%的用户
 * 内存消耗：39.8 MB, 在所有 TypeScript 提交中击败了50.85%的用户
 */
function isSubsequence(s: string, t: string): boolean {
    // 从start位置开始搜索
    let serachIndex = (start: number, str: string) => {
        for (let i = start; i < t.length; i++) {
            const element = t[i];
            if (t[i] === str) {
                return i
            }
        }
        return -1
    }
    let tempIndex = -1
    for (let i = 0; i < s.length; i++) {
        const index = serachIndex(tempIndex + 1, s[i])
        if (index === -1 || index < tempIndex) {
            return false
        }
        tempIndex = index
    }
    return true
};

/**
 * 双指针
 * @param s 
 * @param t 
 * @returns 
 */
function isSubsequenceOne(s: string, t: string): boolean {
    let sIndex = 0, tIndex = 0
    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex += 1
        }
        tIndex += 1
    }
    return sIndex === s.length
};