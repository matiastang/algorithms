/*
 * @Author: tangdaoyong
 * @Date: 2021-05-12 19:09:29
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-12 19:43:09
 * @Description: 子数组异或查询
 */
/*
1310. 子数组异或查询
有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。

对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。

并返回一个包含给定查询 queries 所有结果的数组。

 

示例 1：

输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
输出：[2,7,14,8] 
解释：
数组中元素的二进制表示形式是：
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 
查询的 XOR 值为：
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8
示例 2：

输入：arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
输出：[8,0,4,4]
 

提示：

1 <= arr.length <= 3 * 10^4
1 <= arr[i] <= 10^9
1 <= queries.length <= 3 * 10^4
queries[i].length == 2
0 <= queries[i][0] <= queries[i][1] < arr.length
*/
/**
 * 报错，空间不足
 * @param arr 
 * @param queries 
 * @returns 
 */
function xorQueries(arr: number[], queries: number[][]): number[] {
    // 二维dp数组，dp[i][j]表示arr数组中[i,j]的异或
    let dp = Array<Array<number>>(arr.length).fill([]).map(() => {
        return new Array<number>(arr.length).fill(0)
    })
    // 初始化dp
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (j === i) {
                dp[i][j] = arr[i]
            } else {
                dp[i][j] = dp[i][j - 1] ^ arr[j]
            }
        }
    }
    // 获取结果
    let ans = Array<number>()
    for (let i = 0; i < queries.length; i++) {
        const querie = queries[i];
        ans.push(dp[querie[0]][querie[1]])
    }
    return ans;
};

/**
 * 前缀异或（异或运算的结合律，以及异或运算的性质 x \oplus x=0x⊕x=0。）
 * @param arr 
 * @param queries 
 * @returns 
 * 执行用时：136 ms, 在所有 TypeScript 提交中击败了100.00%的用户
 * 内存消耗：53.2 MB, 在所有 TypeScript 提交中击败了100.00%的用户
 */
function xorQueriesOne(arr: number[], queries: number[][]): number[] {
    // dp数组，dp[i]表示arr数组中[0,i]的异或
    let dp = Array<number>(arr.length + 1).fill(0)
    // 计算前缀异或数组
    for (let i = 0; i <= arr.length; i++) {
        dp[i + 1] = dp[i] ^ arr[i]
    }
    // 获取结果
    let ans = Array<number>()
    for (let i = 0; i < queries.length; i++) {
        const querie = queries[i];
        ans.push(dp[querie[0]] ^ dp[querie[1] + 1])
    }
    return ans;
};