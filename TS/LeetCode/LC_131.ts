/*
 * @Author: tangdaoyong
 * @Date: 2021-03-07 14:05:30
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-08 09:48:36
 * @Description: 分割回文串
 */
/*
131. 分割回文串
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回 s 所有可能的分割方案。

示例:

输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]
*/
function partition(s: string): string[][] {
    if (s.length === 0) {
        return [[s]]
    }
    let arr = Array<Array<string>>()
    for (let i = 0; i < s.length; i++) {
        let leftSub = s.slice(1, i + 1)
        let rightSub = s.slice(i + 1)
        let rightArr = partition(rightSub)
        rightArr.forEach(rightItem => {
            if (isFret(leftSub)) {
                arr.push([leftSub, ...rightItem])
            } else {
                let leftArr = partition(leftSub)
                leftArr.forEach(leftItem => {
                    arr.push([...leftItem, ...rightItem])
                });
            }
        });
    }
    return arr
};

/**
 * 是否是回纹字符串(可以使用双指针判断是否是回文)
 * @param s 
 */
function isFret(s: string): Boolean {
    if (s.length <= 1) {
        return true
    }
    for (let i = 0; i <= s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false
        }
    }
    return true
}

/**
 * 使用dp表存储
 * @param s 
 * 执行用时：
292 ms
, 在所有 TypeScript 提交中击败了
61.90%
的用户
内存消耗：
61 MB
, 在所有 TypeScript 提交中击败了
61.90%
的用户
 */
function partitionOne(s: string): string[][] {

    let fret = fretArr(s)
    const ret = Array<Array<string>>(), ans = Array<string>();
    const n = s.length
    // 回溯，这里使用隐式栈调用，可以用显示栈调用（显示栈性能更好）
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            // if (isPalindrome(i, j) === 1) {
            if (fret[i][j]) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }
    dfs(0)
    return ret
};

// 预处理
// 状态：dp[i][j] 表示 s[i][j] 是否是回文
function fretArr(s: string):Boolean[][] {
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

// console.log(fretArr('aab'))

/**
 * 
 * @param s 
 * * 执行用时：
320 ms
, 在所有 TypeScript 提交中击败了
28.57%
的用户
内存消耗：
60.8 MB
, 在所有 TypeScript 提交中击败了
76.19%
的用户
 */
function partitionTwo(s: string): string[][] {
    const ret = Array<Array<string>>(), ans = Array<string>();
    const n = s.length
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isFret(s.slice(i, j + 1))) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }
    dfs(0)
    return ret
};