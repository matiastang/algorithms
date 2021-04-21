/*
 * @Author: tangdaoyong
 * @Date: 2021-04-21 09:10:16
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-21 11:56:01
 * @Description: 解码方法
 */
/*
91. 解码方法
一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

'A' -> 1
'B' -> 2
...
'Z' -> 26
要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)
注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

题目数据保证答案肯定是一个 32 位 的整数。

 

示例 1：

输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2：

输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
示例 3：

输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
示例 4：

输入：s = "06"
输出：0
解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。
 

提示：

1 <= s.length <= 100
s 只包含数字，并且可能包含前导零。
*/
/**
 * 回溯
 * @param s 
 * @returns 
 * "111111111111111111111111111111111111111111111"
 * 超出时间限制
 */
function numDecodings(s: string): number {
    // 前导0则没有匹配的
    if (s.startsWith('0')) {
        return 0
    }
    const len = s.length
    let ans = 0
    let tempArr = Array<string>()
    /**
     * 
     * @param str 剩余的字符串
     */
    function DFS(str: String) {
        if (str.length <= 0) {
            return
        }
        // 选择完成，可能加1
        if (tempArr.length >= len) {
            ans += 1
            console.log(`有效组合：${tempArr.toString()}`)
            return
        }
        let left = str[0]
        // 只有一个值
        if (str.length <= 1) {
            if (left === '0') {
                return
            }
            tempArr.push(left)
            console.log(`选择了（${left}）`)
            ans += 1
            console.log(`有效组合：${tempArr.toString()}`)
            tempArr.pop()
            return
        }
        // 有两个及以上的值

        // 0
        if (left === '0') {
            return
        }
        // 当前位不为1，2则不可能与下一位组成组合
        if (left !== '1' && left !== '2') {
            tempArr.push(left)// 选择
            console.log(`选择了（${left}）`)
            DFS(str.slice(1))
            tempArr.pop()// 取消选择
            return
        }
        // 下一位
        let right = str[1]
        // 下一位大于6，则不能与当前位组合
        if (left === '2' && right > '6') {
            tempArr.push(left)// 选择
            console.log(`选择了（${left}）`)
            DFS(str.slice(1))
            tempArr.pop()// 取消选择
            return
        }
        // 下一位为0，则只能与当前位组合
        if (right === '0') {
            tempArr.push(left)// 选择两位组合
            tempArr.push(right)
            console.log(`选择了（${left + right}）`)
            // 已经是倒数第二位了
            if (str.length <= 2) {// 越界防护
                ans += 1
                console.log(`有效组合：${tempArr.toString()}`)
            } else {
                DFS(str.slice(2))
            }
            tempArr.pop()// 取消两位组合
            tempArr.pop()
            return
        }
        // 选择当前位
        tempArr.push(left)// 选择
        console.log(`选择了（${left}）`)
        DFS(str.slice(1))
        tempArr.pop()// 取消选择

        // 选择当前位于下一位组合
        tempArr.push(left)// 选择两位组合
        tempArr.push(right)
        console.log(`选择了（${left + right}）`)
        if (str.length <= 2) {// 越界防护
            ans += 1
            console.log(`有效组合：${tempArr.toString()}`)
        } else {
            DFS(str.slice(2))
        }
        tempArr.pop()// 取消两位组合
        tempArr.pop()
    }
    DFS(s)
    return ans
};

/**
 * 回溯优化
 * @param s 
 * @returns 
 * "111111111111111111111111111111111111111111111"
 * 超出时间限制
 */
function numDecodingsOne(s: string): number {
    // 前导0则没有匹配的
    if (s.startsWith('0')) {
        return 0
    }
    const len = s.length
    let ans = 0
    let tempLen = 0
    /**
     * 
     * @param str 剩余的字符串
     */
    function DFS(str: String) {
        if (str.length <= 0) {
            return
        }
        // 选择完成，可能加1
        if (tempLen >= len) {
            ans += 1
            return
        }
        let left = str[0]
        // 只有一个值
        if (str.length <= 1) {
            if (left === '0') {
                return
            }
            tempLen += 1
            console.log(`选择了（${left}）`)
            ans += 1
            tempLen -= 1
            return
        }
        // 有两个及以上的值

        // 0
        if (left === '0') {
            return
        }
        // 当前位不为1，2则不可能与下一位组成组合
        if (left !== '1' && left !== '2') {
            tempLen += 1// 选择
            console.log(`选择了（${left}）`)
            DFS(str.slice(1))
            tempLen -= 1// 取消选择
            return
        }
        // 下一位
        let right = str[1]
        // 下一位大于6，则不能与当前位组合
        if (left === '2' && right > '6') {
            tempLen += 1// 选择
            console.log(`选择了（${left}）`)
            DFS(str.slice(1))
            tempLen -= 1// 取消选择
            return
        }
        // 下一位为0，则只能与当前位组合
        if (right === '0') {
            tempLen += 2// 选择两位组合
            console.log(`选择了（${left + right}）`)
            // 已经是倒数第二位了
            if (str.length <= 2) {// 越界防护
                ans += 1
            } else {
                DFS(str.slice(2))
            }
            tempLen -= 2// 取消两位组合
            return
        }
        // 选择当前位
        tempLen += 1// 选择
        console.log(`选择了（${left}）`)
        DFS(str.slice(1))
        tempLen -= 1// 取消选择

        // 选择当前位于下一位组合
        tempLen += 2// 选择两位组合
        console.log(`选择了（${left + right}）`)
        if (str.length <= 2) {// 越界防护
            ans += 1
        } else {
            DFS(str.slice(2))
        }
        tempLen -= 2// 取消两位组合
    }
    DFS(s)
    return ans
};

/**
 * 动态规划(需要注意一些细节边界条件)
 * @param s 
 * 执行用时：100 ms, 在所有 TypeScript 提交中击败了24.00%的用户
 * 内存消耗：39.7 MB, 在所有 TypeScript 提交中击败了68.00%的用户
 */
function numDecodingsTwo(s: string): number {
    // 前导0则没有匹配的
    if (s.startsWith('0')) {
        return 0
    }
    let tempArr = Array<number>(s.length).fill(0)
    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            tempArr[i] = 1
        } else if (i === 1) {
            if (s[0] !== '1' && s[0] !== '2' ) {
                if (s[i] === '0') {
                    return 0
                }
                tempArr[i] = 1
            } else if (s[0] === '2' && s[i] > '6') {
                tempArr[i] = 1
            } else {
                if (s[i] === '0') {
                    tempArr[i] = 1
                } else {
                    tempArr[i] = 2
                }
            }
        } else {
            if (s[i] === '0') {
                if (s[i - 1] === '0' || s[i - 1] > '2') {
                    return 0
                }
                tempArr[i] = tempArr[i - 1]
            } else {
                if (s[i - 1] !== '1' && s[i - 1] !== '2') {
                    tempArr[i] = tempArr[i - 1]
                } else if (s[i - 1] === '2' && s[i] > '6') {
                    tempArr[i] = tempArr[i - 1]
                } else {
                    tempArr[i] = tempArr[i - 1] + tempArr[i - 2]
                }
            }
        }
    }
    console.log(tempArr)
    return tempArr[tempArr.length - 1]
}