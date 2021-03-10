/*
 * @Author: tangdaoyong
 * @Date: 2021-03-10 09:12:24
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-10 10:01:58
 * @Description: 基本计算器
 */
/*
224. 基本计算器
实现一个基本的计算器来计算一个简单的字符串表达式 s 的值。

 

示例 1：

输入：s = "1 + 1"
输出：2
示例 2：

输入：s = " 2-1 + 2 "
输出：3
示例 3：

输入：s = "(1+(4+5+2)-3)+(6+8)"
输出：23
 

提示：

1 <= s.length <= 3 * 105
s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
s 表示一个有效的表达式
*/
function calculate(s: string): number {
    // 去除'('、')'、和 ' '
    let arr = s.replace(/[() ]/g, '')
    console.log(arr)
    // 数字数组
    let numArr = arr.split(/[+-]/g)
    console.log(numArr)
    // 符号数组
    let symbolArr = arr.match(/[+-]/g)
    console.log(symbolArr)
    /*
    1. 数字数组肯定比符合数组多一位，且仅多一位
    2. 只有+-处理，结合方式不影响最后结果
    3. 
    * 1+(2-3)+4
    * (((1+2)-3)+4)
    * +((1+2)-3)4
    * +-(1+2)34
    * +-+1234(前缀)
    * (1+(2-(3+4))
    * +1(2-(3+4))
    * +-12(3+4)
    * +-+1234(前缀)
    * ((1+2)-3)4+
    * (1+2)3-4+
    * 12+3-4+(后缀)
    * 可见后缀表达数字顺序刚好是原始顺序
    * 
    */
    // 结果
    let ans = +numArr.shift()//转数字
    // 符号数组可能不存在，所有需要判断一下
    if (symbolArr === null) {
        return ans
    }
    for (let i = symbolArr.length - 1; i >= 0; i--) {
        if (symbolArr[i] === '+') {
            ans += +numArr.shift()
        } else {
            ans -= +numArr.shift()
        }
    }
    return ans
};