/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 09:18:35
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 09:44:14
 * @Description: 解码异或后的数组
 */
/*
1720. 解码异或后的数组
未知 整数数组 arr 由 n 个非负整数组成。

经编码后变为长度为 n - 1 的另一个整数数组 encoded ，其中 encoded[i] = arr[i] XOR arr[i + 1] 。例如，arr = [1,0,2,1] 经编码后得到 encoded = [1,2,3] 。

给你编码后的数组 encoded 和原数组 arr 的第一个元素 first（arr[0]）。

请解码返回原数组 arr 。可以证明答案存在并且是唯一的。

 

示例 1：

输入：encoded = [1,2,3], first = 1
输出：[1,0,2,1]
解释：若 arr = [1,0,2,1] ，那么 first = 1 且 encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
示例 2：

输入：encoded = [6,2,7,3], first = 4
输出：[4,2,0,7,4]
 

提示：

2 <= n <= 104
encoded.length == n - 1
0 <= encoded[i] <= 105
0 <= first <= 105
*/
/**
 * 循序反解
 * @param encoded 
 * @param first 
 * @returns 
 * 执行用时：132 ms, 在所有 TypeScript 提交中击败了73.33%的用户
 * 内存消耗：45 MB, 在所有 TypeScript 提交中击败了86.67%的用户
 */
function decode(encoded: number[], first: number): number[] {
    const len = encoded.length
    for (let i = 0; i < len; i++) {
        const left = encoded[i];
        // if (i === 0) {
        //     encoded[i] = first
        //     first = left ^ first
        // } else if (i === len - 1) {
        //     encoded[i] = first
        //     encoded.push(left ^ first)
        // } else {
        //     encoded[i] = first
        //     first = left ^ first
        // }
        encoded[i] = first
        first = left ^ first
        if (i === len - 1) {
            encoded.push(first)
        }
    }
    return encoded
};