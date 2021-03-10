/*
 * @Author: tangdaoyong
 * @Date: 2021-03-09 21:08:43
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-10 09:11:40
 * @Description: 无重复字符的最长子串
 */
/*
3. 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
*/
/**
 * 动态规划
 * @param s 
 * 132 ms	48.6 MB	TypeScript
 */
function lengthOfLongestSubstringOne(s: string): number {
    let max = 0
    if (s.length === 0) {
        return max
    }
    // dp[i]已i位置元素为结尾的最大子串
    let dp = Array<String>()
    dp.push(s[0])
    max = 1
    for (let i = 1; i < s.length; i++) {
        // dp[i - 1]元素为结尾的最大子串不包含则
        let index = dp[i - 1].indexOf(s[i])
        if (index === -1) {
            dp.push(dp[i - 1] + s[i])
        } else {
            if (index === dp[i - 1].length - 1) {
                dp.push(s[i])
            } else {
                dp.push(dp[i - 1].slice(index + 1) + s[i])
            }
        }
        max = Math.max(dp[i].length, max)
    }
    // console.log(dp)
    return max
};

/**
 * 
 * @param s 
 * 执行用时：
124 ms
, 在所有 TypeScript 提交中击败了
53.22%
的用户
内存消耗：
45.1 MB
, 在所有 TypeScript 提交中击败了
32.18%
的用户
 */
function lengthOfLongestSubstringTwo(s: string): number {
    if (s.length === 0) {
        return 0
    }
    let ans = 1
    let max = s[0]
    for (let i = 1; i < s.length; i++) {
        // dp[i - 1]元素为结尾的最大子串不包含则
        let index = max.indexOf(s[i])
        if (index === -1) {
            max += s[i]
        } else {
            if (index === max.length - 1) {
                max = s[i]
            } else {
                max = max.slice(index + 1) + s[i]
            }
        }
        ans = Math.max(ans, max.length)
    }
    console.log(ans)
    return ans
};

function lengthOfLongestSubstringThree(s: string): number {
    // 最长字符串
    let ans = 0
    // 已当前下标为结束符的最长字符串
    let max = ''
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        let index = max.indexOf(char)
        if (index === -1) {
            // 已i-1为下标的最长字符串，包含i下标的字符串
            // 已i结束符的最长字符串，为以i-1为结束符的最长字符串+当前字符
            max += char
            // 判断是否需要更新总的最长，子串
            ans = Math.max(ans, max.length)
        } else {
            // 已i-1为下标的最长字符串，不包含i下标的字符串
            // 包含位置，后续字符串+当前字符串。肯定<=ans
            max = max.substr(index + 1) + char
        }
    }
    return ans
};

/**
 * 滑动窗口
 * @param s
 * 的用户
内存消耗：
44.3 MB
, 在所有 TypeScript 提交中击败了
47.66%
的用户
 */
function lengthOfLongestSubstringFour(s: string): number {
    // 最长字符串
    let ans = 0
    // 已当前下标为结束符的最长字符串
    let max = ''
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        let index = max.indexOf(char)
        if (index === -1) {
            // 已i-1为下标的最长字符串，包含i下标的字符串
            // 已i结束符的最长字符串，为以i-1为结束符的最长字符串+当前字符
            max += char
            // 判断是否需要更新总的最长，子串
            ans = Math.max(ans, max.length)
        } else {
            // 已i-1为下标的最长字符串，不包含i下标的字符串
            // 包含位置，后续字符串+当前字符串。肯定<=ans
            max = max.substr(index + 1) + char
        }
    }
    console.log(ans)
    return ans
};