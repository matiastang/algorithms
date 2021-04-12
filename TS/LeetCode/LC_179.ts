/*
 * @Author: tangdaoyong
 * @Date: 2021-04-12 10:06:12
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-12 23:03:30
 * @Description: 最大数
 */
/*
179. 最大数
给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

 

示例 1：

输入：nums = [10,2]
输出："210"
示例 2：

输入：nums = [3,30,34,5,9]
输出："9534330"
示例 3：

输入：nums = [1]
输出："1"
示例 4：

输入：nums = [10]
输出："10"
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 109
通过次数64,718提交次数166,351
*/
/**
 * 首先选择首位最大的，首位相同比较下一位（如果有），首部所有位相同，则短的数据优先
 * @param nums 
 * 执行用时：
108 ms
, 在所有 TypeScript 提交中击败了
25.00%
的用户
内存消耗：
44.9 MB
, 在所有 TypeScript 提交中击败了
5.00%
的用户
 */
function largestNumber(nums: number[]): string {

    let bitNums = nums.map((value) => {
        return getNums(value)
    })
    let arr = bitNums.sort((left, right) => {
        let leftArr = [...left, ...right]
        let rightArr = [...right, ...left]
        for (let i = 0; i < leftArr.length; i++) {
            if (leftArr[i] < rightArr[i]) {
                return 1
            }
            if (leftArr[i] > rightArr[i]) {
                return -1
            }
        }
        return 0
    })
    let ansArr = arr.map((value) => {
        return value.join('')
    })
    if (ansArr[0] == '0') {
        return '0'
    }
    return ansArr.join('')
};

/**
 * 拆分数字为位数组
 * @param num 数字
 * @returns 位数组
 */
function getNums(num: number): number[] {
    let ans = num.toString().split('').map((value) => {
        return parseInt(value)
    })
    return ans
}

/**
 * 题解
 * @param nums 
 * @returns 
 */
function largestNumberOne(nums: number[]): string {
    nums.sort((x, y) => {
        let sx = 10, sy = 10;
        while (sx <= x) {
            sx *= 10;
        }
        while (sy <= y) {
            sy *= 10;
        }
        return (sx * y + x) - (sy * x + y);
    })
    if (nums[0] === 0) {
        return '0';
    }
    return nums.join('');
}