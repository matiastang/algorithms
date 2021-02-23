/*
 * @Author: tangdaoyong
 * @Date: 2021-02-20 16:53:54
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-02-23 09:16:26
 * @Description: 448. 找到所有数组中消失的数字
 */
/*
448. 找到所有数组中消失的数字
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:

输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
*/
/**
 * @description: 448. 找到所有数组中消失的数字
 * @param {number} nums
 * @return {*}
 */
function findDisappearedNumbersOne(nums: number[]): number[] {
    // 排序O(nlogn)
    let sortArr = nums.sort(function(left:number, right: number): number {
        return left - right
    })
    // 过滤重复
    let filterArr = sortArr.filter((item, index, arr) => {
        // 过滤保留第一次出现的不重复数字
        return arr.indexOf(item) === index
    })
    // let mapArr = sortArr.map((item, index, arr) => {
    //     return arr.indexOf(item) === index ? item : -1
    // })
    // console.log(filterArr)
    // 查找未出现的
    let numbers = []
    for (let index = 1; index <= filterArr.length; index++) {
        const element = filterArr[index - 1];
        if (index === 1) {
            if (element != 1) {
                for (let i = 1; i < element; i++) {
                    numbers.push(index)
                }
            }
            continue
        }
        const left = filterArr[index - 2]
        if (element != left + 1) {
            for (let i = left + 1; i < element; i++) {
                numbers.push(i)
            }
        }
    }
    return numbers
};
// console.log(findDisappearedNumbersOne([4,3,2,7,8,2,3,1]))
/**
 * @description: 448. 找到所有数组中消失的数字
 * @param {number} nums
 * @return {*}
 */
function findDisappearedNumbersTwo(nums: number[]): number[] {
    // 排序O(nlogn)
    let sortArr = nums.sort(function(left:number, right: number): number {
        return left - right
    })
    // 过滤重复
    let filterArr = sortArr.filter((item, index, arr) => {
        // 过滤保留第一次出现的不重复数字
        return arr.indexOf(item) === index
    })
    // 查找未出现的
    let numbers = []
    for (let index = 1; index <= filterArr.length; index++) {
        const element = filterArr[index - 1];
        let left = 0
        if (index !== 1) {
            left = filterArr[index - 2]
        }
        if (element != left + 1) {
            for (let i = left + 1; i < element; i++) {
                numbers.push(i)
            }
        }
    }
    return numbers
};
// console.log(findDisappearedNumbersTwo([4,3,2,7,8,2,3,1]))
/**
 * @description: 448. 找到所有数组中消失的数字
 * @param {number} nums
 * @return {*}
 * 通过	208 ms	49.4 MB	TypeScript
 */
function findDisappearedNumbersThree(nums: number[]): number[] {
    // 排序O(nlogn)
    let sortArr = nums.sort(function(left:number, right: number): number {
        return left - right
    })
    // 查找未出现的
    let numbers = []
    for (let index = 0; index < sortArr.length; index++) {
        const element = sortArr[index];
        let left = 0
        if (index !== 0) {
            left = sortArr[index - 1]
        }
        if (element > left + 1) {
            for (let i = left + 1; i < element; i++) {
                numbers.push(i)
            }
        }
        if (index === sortArr.length - 1 && element < index + 1) {
            for (let i = element + 1; i <= index + 1; i++) {
                numbers.push(i)
            }
        }
    }
    return numbers
};
// console.log(findDisappearedNumbersThree([4,3,2,7,2,3,1,3]))
// console.log(findDisappearedNumbersThree([1,1]))
/**
 * @description: 448. 找到所有数组中消失的数字
 * @param {number} nums
 * @return {*}
 * 通过	8848 ms	46.7 MB	TypeScript
 */
function findDisappearedNumbersFour(nums: number[]): number[] {
    let numbers = []
    for (let index = 1; index <= nums.length; index++) {
        if (nums.indexOf(index) === -1) {// 这步太耗时了
            numbers.push(index) 
        }
    }
    return numbers
};
// console.log(findDisappearedNumbersFour([4,3,2,7,2,3,1,3]))
// console.log(findDisappearedNumbersThree([1,1]))
/**
 * @description: 448. 找到所有数组中消失的数字
 * @param {number} nums
 * @return {*}
 * 144 ms	50.7 MB	TypeScript
 */
function findDisappearedNumbersFive(nums: number[]): number[] {
    // let numSet = new Set(nums)
    let numbers = []
    // for (let index = 1; index <= nums.length; index++) {
    //     if (!numSet.has(index)) {
    //         numbers.push(index) 
    //     }
    // }
    return numbers
};
// console.log(findDisappearedNumbersFive([4,3,2,7,2,3,1,3]))
// console.log(findDisappearedNumbersFive([1,1]))
/**
 * @description: 448. 找到所有数组中消失的数字
 * @param {number} nums
 * @return {*}
 * 144 ms	50.7 MB	TypeScript
 */
function findDisappearedNumbersSix(nums: number[]): number[] {
    let max = nums.length
    for (const iterator of nums) {
        let index = (iterator - 1) % max
        nums[index] += max
    }
    let numbers = []
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] <= max) {
            numbers.push(index + 1) 
        }
    }
    return numbers
};
// console.log(findDisappearedNumbersSix([4,3,2,7,8,2,3,1]))
// console.log(findDisappearedNumbersSix([1,1]))
/**
 * @description: 448. 找到所有数组中消失的数字
 * @param {number} nums
 * @return {*}
 * 128 ms	47.1 MB	TypeScript
 */
function findDisappearedNumbersSive(nums: number[]): number[] {
    for (const iterator of nums) {
        let index = iterator - 1
        if (iterator < 0) {
            index = -1 - iterator
        }
        if (nums[index] > 0) {
            nums[index] = -nums[index]
        }
    }
    let numbers = []
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > 0) {
            numbers.push(index + 1) 
        }
    }
    return numbers
};
console.log(findDisappearedNumbersSive([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbersSive([1,1]))