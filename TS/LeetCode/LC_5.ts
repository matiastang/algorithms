/*
 * @Author: tangdaoyong
 * @Date: 2023-03-26 14:31:29
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-26 22:48:40
 * @Description: 5. 最长回文子串
 */
/*
5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母组成
*/
function longestPalindromeTwo(s: string): string {
    if (s.length < 2) {
        return s
    }
    const dp = Array(s.length)
    for (let i = 0; i < s.length; i++) {
        dp[i] = Array(s.length).fill(false)
        dp[i][i] = true        
    }
    let ans = s.slice(0, 1)
    for (let L = 2; L <= s.length; L++) {
        for (let i = 0; i <= s.length - L; i++) {
            const r = i + L - 1
            if (s[i] !== s[r]) {
                dp[i][r] = false
                continue
            }
            if (L <= 3) {
                dp[i][r] = true
            } else {
                dp[i][r] = dp[i + 1][r - 1]
            }
            if (dp[i][r] && L > ans.length) {
                ans = s.slice(i, r + 1)
            }
        }
        
    }
    return ans
}

function longestPalindromeOne(s: string): string {

    const maxLoop = (list: string) => {
        for (let k = 0; k < list.length; k++) {
            let isLoop = true
            for (let i = k, j = list.length - 1; i < j; i++, j--) {
                if (list[i] !== list[j]) {
                    isLoop = false
                    break
                }
            }
            if (isLoop) {
                return list.slice(k)
            }
        }
        return ''
    }
    let ans = ''
    let last = ''
    for (let i = 0; i < s.length; i++) {
        const left = i - last.length - 1
        if (left >= 0) {
            if (s[left] === s[i]) {
                last = s[left] + last + s[i]
                if (ans.length < last.length) {
                    ans = last
                }
                continue
            }
        }
        last = maxLoop(last + s[i])
        if (ans.length < last.length) {
            ans = last
        }
    }
    return ans
}
function longestPalindrome(s: string): string {
    const isLoop = (left, right) => {
        for (let i = left, j = right; i < right; i++, j--) {
            if (s[i] !== s[j]) {
                return false
            }
            
        }
        return true
    }
    let ans = ''
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isLoop(i, j)) {
                if (ans.length < j - i) {
                    ans = s.substring(i, j + 1)
                }
            }
        }
    }
    return ans
};