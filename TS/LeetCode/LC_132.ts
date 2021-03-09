/*
 * @Author: tangdaoyong
 * @Date: 2021-03-08 09:43:52
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-08 11:35:29
 * @Description: 分割回文串 II
 */
/*
132. 分割回文串 II
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文。

返回符合要求的 最少分割次数 。

题131，返回了全部可能
*/
// 预处理
// 状态：dp[i][j] 表示 s[i][j] 是否是回文
function minCutFretArr(s: string):Boolean[][] {
    // fill填充的Array是引用类型，所有修改一处会引起多处变化
    // let dp = Array<Array<Boolean>>(s.length).fill(Array<Boolean>(s.length).fill(false))
    let dp: Boolean[][] = Array()
    for (let i = 0; i < s.length; i++) {
        let arr = Array<Boolean>()
        for (let j = 0; j < s.length; j++) {
            arr.push(false)
        }
        dp.push(arr)
    }
    // i是右边界，j是左边界，相等表示只有一个字符
    for (let i = 0; i < s.length; i++) {
        // j <= i 取等号表示 1 个字符的时候也需要判断
        for (let j = 0; j <= i; j++) {
            if (s[i] === s[j] && ((i - j <= 2) || dp[j + 1][i - 1])){
                dp[j][i] = true
            }
        }
    }
    return dp
}

/**
 * 超出时间限制
 * @param s 
 */
function minCutOne(s: string): number {
    let fret = minCutFretArr(s)
    let num = s.length - 1, ans = Array<string>();
    const n = s.length
    // 回溯，这里使用隐式栈调用，可以用显示栈调用（显示栈性能更好）
    const dfs = (i) => {
        if (i === n) {
            if (num > ans.length - 1) {
                num = ans.length - 1
            }
            return;
        }
        for (let j = i; j < n; ++j) {
            if (fret[i][j]) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }
    dfs(0)
    return num
};

/**
 * 动态规划
 * @param s 
 * 执行用时：
204 ms
, 在所有 TypeScript 提交中击败了
50.00%
的用户
内存消耗：
66.4 MB
, 在所有 TypeScript 提交中击败了
50.00%
的用户
 */
function minCutTwo(s: string): number {
    let fretArr = minCutFretArr(s)
    let len = s.length - 1
    let res = Array<number>(s.length).fill(len)
    for (let i = 0; i < len; i++) {
        if (fretArr[0][i]) {
            res[i] = 0
        } else {
            for (let j = 0; j < i; j++) {
                if (fretArr[j + 1][i]) {
                    res[i] = Math.min(res[i], res[j] + j)
                }   
            }
        }
    }
    return res[len]
};

/**
 * 是否是回文（双指针）
 * @param s 
 */
function isPalindrome(s: String): Boolean {
    let left = 0, right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left += 1
        right -= 1
    }
    return true
}