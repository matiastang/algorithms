/*
 * @Author: tangdaoyong
 * @Date: 2021-03-06 19:30:54
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-06 20:48:16
 * @Description: 下一个更大元素 II
 */
/*
503. 下一个更大元素 II
给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

示例 1:

输入: [1,2,1]
输出: [2,-1,2]
解释: 第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数； 
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
注意: 输入数组的长度不会超过 10000。
*/
/**
 * 暴力解
 * @param nums 
 * 执行用时：
180 ms
, 在所有 TypeScript 提交中击败了
38.46%
的用户
内存消耗：
44.7 MB
, 在所有 TypeScript 提交中击败了
84.62%
的用户
 */
function nextGreaterElements(nums: number[]): number[] {
    let resArr = Array<number>()
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        let tempNum: number | null = null
        for (let j = i; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                tempNum = nums[j]
                break
            }
        }
        if (tempNum === null) {
            for (let k = 0; k < i; k++) {
                if (nums[i] < nums[k]) {
                    tempNum = nums[k]
                    break
                }
            }
        }
        if (tempNum === null) {
            resArr[i] = -1
        } else {
            resArr[i] = tempNum
        }
    }
    return resArr
};

/**
 * 记录数组前面的最大值，判断是否需要在前面部分搜索（如果后面部分没搜索到值时）
 * @param nums 
 * 执行用时：
152 ms
, 在所有 TypeScript 提交中击败了
53.85%
的用户
内存消耗：
44.8 MB
, 在所有 TypeScript 提交中击败了
76.92%
的用户
 */
function nextGreaterElementsOne(nums: number[]): number[] {
    let resArr = Array<number>()
    let tempMax: number
    for (let i = 0; i < nums.length; i++) {
        let indexNum = nums[i]
        if (i === 0 || tempMax < indexNum) {
            tempMax = indexNum
        }
        let tempNum: number | null = null
        for (let j = i; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                tempNum = nums[j]
                break
            }
        }
        if (tempNum === null && tempMax > indexNum) {
            for (let k = 0; k < i; k++) {
                if (nums[i] < nums[k]) {
                    tempNum = nums[k]
                    break
                }
            }
        }
        if (tempNum === null) {
            resArr[i] = -1
        } else {
            resArr[i] = tempNum
        }
    }
    return resArr
};

/**
 * 
 * @param nums 
 * 执行用时：
164 ms
, 在所有 TypeScript 提交中击败了
53.85%
的用户
内存消耗：
44.5 MB
, 在所有 TypeScript 提交中击败了
92.31%
的用户
 */
function nextGreaterElementsTwo(nums: number[]): number[] {
    let resArr = Array<number>()
    let tempMax: number
    for (let i = 0; i < nums.length; i++) {
        let indexNum = nums[i]
        if (i === 0 || tempMax < indexNum) {
            tempMax = indexNum
        }
        let tempNum: number | null = null
        for (let j = i; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                tempNum = nums[j]
                break
            }
        }
        if (tempNum === null && tempMax > indexNum) {
            for (let k = 0; k < i; k++) {
                if (nums[i] === nums[k]) {
                    tempNum = resArr[k]
                    break
                } else if (nums[i] < nums[k]) {
                    tempNum = nums[k]
                    break
                } else {
                    if (nums[i] < resArr[k] ) {
                        tempNum = resArr[k]
                        break
                    }
                }
                
            }
        }
        if (tempNum === null) {
            resArr[i] = -1
        } else {
            resArr[i] = tempNum
        }
    }
    return resArr
};

/**
 * 单调栈
 * @param nums 
 * 执行用时：
132 ms
, 在所有 TypeScript 提交中击败了
92.31%
的用户
内存消耗：
44.5 MB
, 在所有 TypeScript 提交中击败了
92.31%
的用户
 */
function nextGreaterElementsThree(nums: number[]): number[] {
    // 结果数组
    let resArr = Array<number>(nums.length).fill(-1)
    // 单调栈
    let tempArr = Array<number>()
    for (let i = 0; i < 2 * nums.length; i++) {
        let index = i % nums.length
        while (tempArr.length > 0 && nums[index] > nums[tempArr[tempArr.length - 1]]) {
            resArr[tempArr.pop()] = nums[index]
        }
        tempArr.push(index)
    }
    return resArr
};