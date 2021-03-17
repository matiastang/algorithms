/*
 * @Author: tangdaoyong
 * @Date: 2021-03-17 20:19:33
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-17 21:57:52
 * @Description: file content
 */
/*
115. 不同的子序列
给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

题目数据保证答案符合 32 位带符号整数范围。

提示：

0 <= s.length, t.length <= 1000
s 和 t 由英文字母组成
*/
/**
 * 回溯
 * @param s 
 * @param t 
 * @returns 
 * 	超出时间限制	N/A	N/A	TypeScript
 */
function numDistinctOne(s: string, t: string): number {
    // 特殊情况
    if (s.length <= 0 || t.length <= 0 || t.length > s.length) {
        return 0
    }
    // 相等
    if (t.length === s.length) {
        return t === s ? 1 : 0
    }
    /*
    一个t.length行的二维数组，存放t对应位置的字符在s中的位置
    */
    let tempArr: number[][] = Array()
    // let tempIndexArr: number[] = Array()
    for (let j = 0; j < t.length; j++) {
        const tChar = t.charAt(j);
        let arr = Array<number>()
        for (let i = 0; i < s.length; i++) {
            const sChar = s.charAt(i);
            if (sChar === tChar) {
                arr.push(i)
            }
        }
        // 表示t中的某个字符没有在s中出现
        if (arr.length <= 0) {
            return 0
        } else {
            tempArr.push(arr)
            // tempIndexArr.push(arr[arr.length - 1])
        }
    }
    console.log(tempArr)
    // 组合(回溯)
    let ans = 0
    let tempIndexArr = Array()
    function dfs(index) {
        for (let i = index; i >= 0; i--) {
            for (let j = tempArr[i].length - 1; j >= 0; j--) {
                if (tempIndexArr.length <= 0 || tempArr[i][j] < tempIndexArr[tempIndexArr.length - 1]) {
                    tempIndexArr.push(tempArr[i][j])
                    if (tempIndexArr.length >= tempArr.length) {
                        ans += 1
                    } else {
                        dfs(i - 1)
                    }
                    tempIndexArr.pop()
                }
            }
        }
    }

    dfs(tempArr.length - 1)
    
    return ans
};

/**
 * 动态规划
 * @param s 
 * @param t 
 * @returns 
 * 执行用时：
116 ms
, 在所有 TypeScript 提交中击败了
50.00%
的用户
内存消耗：
41.3 MB
, 在所有 TypeScript 提交中击败了
100.00%
的用户
 */
function numDistinct(s: string, t: string): number {
    // 特殊情况
    if (s.length <= 0 || t.length <= 0 || t.length > s.length) {
        return 0
    }
    // 相等
    if (t.length === s.length) {
        return t === s ? 1 : 0
    }
    /*
    * dp,dp[i,j]
    */
    let dpArr: number[][] = Array(s.length + 1).fill(0).map(() => {
        return Array<number>(t.length + 1).fill(0)
    })
    /**
     * 初始值
     */
    for (let i = 0; i < dpArr.length; i++) {
        dpArr[i][t.length] = 1
    }
    /**
     * 动态规划
     */
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = t.length - 1; j >= 0; j--) {
            if (s.charAt(i) === t.charAt(j)) {
                dpArr[i][j] = dpArr[i + 1][j + 1] + dpArr[i + 1][j]
            } else {
                dpArr[i][j] = dpArr[i + 1][j]
            }
        }
    }
    return dpArr[0][0]
};