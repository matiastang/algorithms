/*
 * @Author: tangdaoyong
 * @Date: 2021-04-19 10:44:54
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-19 11:02:22
 * @Description: 最长不含重复字符的子字符串
 */
/*
剑指 Offer 48. 最长不含重复字符的子字符串
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

提示：

s.length <= 40000
注意：本题与主站 3 题相同：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
*/
/**
 * 动态规划
 * @param s 
 * @returns 
 * 执行用时：112 ms, 在所有 TypeScript 提交中击败了87.10%的用户
 * 内存消耗：45.8 MB, 在所有 TypeScript 提交中击败了6.45%的用户
 */
function lengthOfLongestSubstring(s: string): number {
    let ans = 0
    let tempStr = ''
    for (let i = 0; i < s.length; i++) {
        let index = tempStr.indexOf(s[i])
        if (index !== -1) {
            if (ans < tempStr.length) {
                ans = tempStr.length
            }
            if (index >= tempStr.length - 1) {
                tempStr = s[i]
            } else {
                tempStr = tempStr.slice(index) + s[i]
            }
        } else {
            tempStr += s[i]
        }
    }
    if (ans < tempStr.length) {
        ans = tempStr.length
    }
    return ans
};