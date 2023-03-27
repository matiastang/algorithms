/*
 * @Author: tangdaoyong
 * @Date: 2023-03-26 23:40:34
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-26 23:44:22
 * @Description: 22. 括号生成
 */
/*
22. 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8
*/
function generateParenthesis(n: number): string[] {
    if (n < 2) {
        return ["()"]
    }
    const ans: string[] = []
    let cur = ''
    const backtrack = (left: number, right: number) => {
        if (left >= n && right >= n) {
            ans.push(cur)
            return
        }
        if (left < n) {
            cur += '('
            backtrack(left + 1, right)
            cur = cur.slice(0, -1)
        }
        if (right < left) {
            cur += ')'
            backtrack(left, right + 1)
            cur = cur.slice(0, -1)
        }
    }
    backtrack(0, 0)
    return ans
};