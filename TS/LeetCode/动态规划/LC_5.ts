/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 16:36:17
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 17:31:47
 * @Description: 最长回文子串
 */
/*
5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成
*/
function longestPalindrome(s: string): string {
    let ans = '', maxIndexStr = ''
    /**
     * 获取结尾字符的最大回文
     * @param str 
     */
    let getEstPalindrome = (str: string) => {
        for (let i = 0; i < str.length; i++) {
            let left = i, right = str.length - 1, temp = true
            while (left < right) {
                if (str[left] != str[right]) {
                    temp = false
                    break
                }
                left += 1
                right -= 1
            }
            if (temp) {
                return str.substring(i)
            }
        }
        return ''
    }
    for (let i = 0; i < s.length; i++) {
        // 初始
        if (i === 0) {
            ans = s[i]
            maxIndexStr = s[i]
            continue
        }
        // 能扩展成回文
        if (s[i] === s[i - 1 - maxIndexStr.length]) {
            maxIndexStr = s[i] + maxIndexStr + s[i]
            if (ans.length < maxIndexStr.length) {
                ans = maxIndexStr
            }
            continue
        }
        // 查找已s[i]为结尾的回文字符
        maxIndexStr = getEstPalindrome(maxIndexStr + s[i])
        if (ans.length < maxIndexStr.length) {
            ans = maxIndexStr
        }
    }
    return ans
};

/**
 * 是否是回文
 * @param str 
 * @returns 
 */
let isEstPalindrome = (str: string) => {
    if (str.length <= 1) {
        return true
    }
    let left = 0, right = str.length - 1
    while (left < right) {
        if (str[left] != str[right]) {
            return false
        }
        left += 1
        right -= 1
    }
    return true
}