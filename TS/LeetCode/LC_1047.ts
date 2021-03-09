/*
 * @Author: tangdaoyong
 * @Date: 2021-03-09 09:31:23
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-09 09:42:36
 * @Description: 删除字符串中的所有相邻重复项
 */
/*
1047. 删除字符串中的所有相邻重复项
给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

 

示例：

输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 

提示：

1 <= S.length <= 20000
S 仅由小写英文字母组成。
*/
/**
 * 栈
 * @param S 
 * 执行用时：
116 ms
, 在所有 TypeScript 提交中击败了
36.00%
的用户
内存消耗：
47.6 MB
, 在所有 TypeScript 提交中击败了
12.00%
的用户
 */
function removeDuplicatesOne(S: string): string {
    let res = Array<string>()
    res.push(S[0])
    for (let i = 1; i < S.length; i++) {
        const element = S[i];
        if (res[res.length - 1] === element) {
            res.pop()
        } else {
            res.push(element)
        }
    }
    return res.join('')
};

/**
 * 栈
 * @param S 
 * 执行用时：
执行用时：
104 ms
, 在所有 TypeScript 提交中击败了
64.00%
的用户
内存消耗：
48.1 MB
, 在所有 TypeScript 提交中击败了
12.00%
的用户
 */
function removeDuplicatesTwo(S: string): string {
    let strArr = S.split('')
    let res = Array<string>()
    res.push(strArr[0])
    for (let i = 1; i < strArr.length; i++) {
        const element = strArr[i];
        if (res[res.length - 1] === element) {
            res.pop()
        } else {
            res.push(element)
        }
    }
    return res.join('')
};

function removeDuplicatesThree(S: string): string {
    let strArr = S.split('')
    let res = Array<string>()
    res.push(S[0])
    for (let i = 1; i < strArr.length; i++) {
        const element = strArr[i];
        if (res[res.length - 1] === element) {
            res.pop()
        } else {
            res.push(element)
        }
    }
    return res.join('')
};