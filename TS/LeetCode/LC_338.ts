/*
 * @Author: tangdaoyong
 * @Date: 2021-03-03 09:55:27
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-03 14:51:42
 * @Description: 比特位计数
 */
/*
338. 比特位计数
给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

示例 1:

输入: 2
输出: [0,1,1]
示例 2:

输入: 5
输出: [0,1,1,2,1,2]
进阶:

给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
要求算法的空间复杂度为O(n)。
你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。
*/
/**
 * 
 * @param num 
 * 132 ms	44 MB	TypeScript
 */
function countBitsOne(num: number): number[] {
    let res = Array<number>(num + 1).fill(0)
    let remainder = 0
    for (let i = 0; i <= num; i++) {
        remainder = i 
        while (remainder > 0) {
            if (remainder & 1) {
                res[i] += 1
            }
            remainder = remainder >> 1
        }
    }
    return res
};

/**
 * 递归求解
 * @param num 
 * 超出时间限制	N/A	N/A	TypeScript
 */
function countBitsTwo(num: number): number[] {
    if (num === 0) {
        return [0]
    }
    if (num === 1) {
        return [0, 1]
    }
    let sum = 0
    let remainder = 0
    while (remainder > 0) {
        if (remainder & 1) {
            sum += 1
        }
        remainder = remainder >> 1
    }
    return [...countBitsTwo(num - 1), sum]
};

/**
 * 
 * @param num 
 * 执行用时：
120 ms
, 在所有 TypeScript 提交中击败了
47.83%
的用户
内存消耗：
43.9 MB
, 在所有 TypeScript 提交中击败了
100.00%
的用户
 */
function countBitsThree(num: number): number[] {
    if (num === 0) {
        return [0]
    }
    let res = Array<number>(num + 1).fill(0)
    res[1] = 1
    for (let i = 2; i <= num; i++) {
        if (res[i] != 0) {
            continue
        }
        let sum = 0
        let remainder = i
        while (remainder > 0) {
            if (remainder & 1) {
                sum += 1
            }
            remainder = remainder >> 1
        }
        // 2倍值相同
        let next = i
        while (next <= num) {
            res[next] = sum
            next = next << 1
        }
    }
    return res
};

/**
 * 
 * @param num 
 * 执行用时：
104 ms
, 在所有 TypeScript 提交中击败了
91.30%
的用户
内存消耗：
44 MB
, 在所有 TypeScript 提交中击败了
82.61%
的用户
 */
function countBitsFour(num: number): number[] {
    if (num === 0) {
        return [0]
    }
    let res = Array<number>(num + 1).fill(0)
    for (let i = 1; i <= num; i++) {
        if (res[i] != 0) {
            continue
        }
        // 2倍值相同，如果当前为没有值，则当前为的值为前一位加一
        // let next = i
        // while (next <= num) {
        //     res[next] = res[i - 1] + 1
        //     next = next << 1
        // }
        // 这种方式比上面好，res[next]和res[i - 1]可能不再同一块儿缓存中，降低了缓存击中的概率导致性能下降，通过变量保存下来
        let value = res[i - 1] + 1
        let next = i
        while (next <= num) {
            res[next] = value
            next = next << 1
        }
    }
    return res
};

/**
 * 
 * @param num 
 * 执行用时：
120 ms
, 在所有 TypeScript 提交中击败了
47.83%
的用户
内存消耗：
43.9 MB
, 在所有 TypeScript 提交中击败了
100.00%
的用户
 */
function countBitsFive(num: number): number[] {
    if (num === 0) {
        return [0]
    }
    let res = Array<number>(num + 1)
    res[0] = 0
    for (let i = 1; i <= num; i++) {
        if (res[i] !== undefined) {
            continue
        }
        // 2倍值相同，如果当前为没有值，则当前为的值为前一位加一
        let value = res[i - 1] + 1
        let next = i
        while (next <= num) {
            res[next] = value
            next = next << 1
        }
    }
    return res
};

/**
 * 获取number的二进制表示中1的个数
 * @param x 
 */
const countOnes = (x:number) => {
    let ones = 0;
    while (x > 0) {
        // `x=x&(x−1)`，该运算将 `x` 的二进制表示的最后一个 `1` 变成 `0`
        x &= (x - 1);
        ones++;
    }
    return ones;
}

/**
 * 官解 方法三：动态规划——最低有效位
 * @param num 
 */
function countBitsSix(num: number): number[] {
    let res = Array<number>(num + 1)
    res[0] = 0
    for (let i = 1; i <= num; i++) {
        res[i] = res[i >> 1] + (i & 1)
    }
    return res
};

/**
 * 官解 方法四：动态规划——最低设置位
 * @param num 
 */
function countBitsSeven(num: number): number[] {
    let res = Array<number>(num + 1)
    res[0] = 0
    for (let i = 1; i <= num; i++) {
        res[i] = res[i&(i - 1)] + 1
    }
    return res
};