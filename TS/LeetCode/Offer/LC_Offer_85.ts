/*
 * @Author: tangdaoyong
 * @Date: 2023-03-26 22:54:12
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-26 23:41:50
 * @Description: 剑指 Offer II 085. 生成匹配的括号
 */
/*
剑指 Offer II 085. 生成匹配的括号
正整数 n 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8
*/
function generateParenthesisOne(n: number): string[] {
    if (n < 2) {
        return ["()"]
    }
    const ans: string[] = []
    const backtrack = (ans: string[], cur: string, left: number, right: number, max: number) => {
        if (left >= max && right >= max) {
            ans.push(cur)
            return
        }
        if (left < max) {
            cur += '('
            backtrack(ans, cur, left + 1, right, max)
            cur = cur.slice(0, -1)
        }
        if (right < left) {
            cur += ')'
            backtrack(ans, cur, left, right + 1, max)
            cur = cur.slice(0, -1)
        }
    }
    backtrack(ans, '', 0, 0, n)
    return ans
};

function generateParenthesisTwo(n: number): string[] {
    if (n < 2) {
        return ["()"]
    }
    const nextAns = generateParenthesisTwo(n - 1)
    const ans: string[] = []
    for (let i = 0; i < nextAns.length; i++) {
        ans.push(`(${nextAns[i]})`)
        const left = `()${nextAns[i]}`
        const right = `${nextAns[i]}()`
        ans.push(left)
        if (left !== right) {
            ans.push(right)
        }
    }
    return ans
};