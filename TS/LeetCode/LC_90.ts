/*
 * @Author: tangdaoyong
 * @Date: 2021-03-31 18:34:09
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-31 22:32:55
 * @Description: 子集 II
 */
/*
90. 子集 II
给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

示例 1：

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10

[数组去重](https://segmentfault.com/a/1190000016418021?utm_source=tag-newest)
[数组去重](https://www.zhihu.com/question/275792654)
*/
/**
 * 不改变子集顺序
 * @param nums 
 * @returns 
 */
function subsetsWithDup(nums: number[]): number[][] {
    /**
     * 数组是否包含
     * @param arr 
     * @param item 
     * @returns 
     */
    let arrIncludeItem = (arr, item) => {
        for (let i = 0; i < arr.length; i++) {
            if (item.toString() === arr[i].toString()) {
                return true
            }   
        }
        return false
    }

    let tempArr = Array<number[]>()
    tempArr.push([])
    for (let i = 0; i < nums.length; i++) {
        if (!arrIncludeItem(tempArr, nums[i])) {
            tempArr.push([nums[i]])
        }
        for (let j = 0; j < tempArr.length; j++) {
            let tempValue = tempArr[j];
            tempValue.push(nums[i])
            if (!arrIncludeItem(tempArr, tempValue)) {
                tempArr.push(tempValue)
            }
        }
    }
    return tempArr
};

/**
 * 的用户
内存消耗：
44.8 MB
, 在所有 TypeScript 提交中击败了
8.33%
的用户
 * @param nums 
 * @returns 
 */
function subsetsWithDupOne(nums: number[]): number[][] {
    /**
     * 数组是否包含
     * @param arr 
     * @param item 
     * @returns 
     */
     let arrIncludeItem = (arr: number[][], item: number[]) => {
        /*
        修改了比对方式后：执行用时：
        104 ms
        , 在所有 TypeScript 提交中击败了
        25.00%
        的用户
        内存消耗：
        40.2 MB
        , 在所有 TypeScript 提交中击败了
        79.17%
        的用户
        */
        for (let i = 0; i < arr.length; i++) {
            let value = arr[i]
            if (item.length != value.length) {
                continue
            }
            let include = true
            for (let j = 0; j < item.length; j++) {
                if (item[j] !== value[j]) {
                    include = false
                    break
                }
            }
            if (include) {
                return true
            }
            // if (item.toString() === arr[i].toString()) {
            //     return true
            // }   
        }
        return false
    }
    nums.sort((left, right) => {
        return left > right ? 1 : -1
    })
    let tempArr = Array<number[]>()
    tempArr.push([])
    for (let i = 0; i < nums.length; i++) {
        const len = tempArr.length
        for (let j = 0; j < len; j++) {
            let tempValue = [...tempArr[j], nums[i]];
            if (!arrIncludeItem(tempArr, tempValue)) {
                tempArr.push(tempValue)
            }
        }
        if (!arrIncludeItem(tempArr, [nums[i]])) {
            tempArr.push([nums[i]])
        }
    }
    return tempArr
}

/**
 * 回溯算法，重点在于排重
 * @param nums 
 * @returns
 * 执行用时：
92 ms
, 在所有 TypeScript 提交中击败了
83.33%
的用户
内存消耗：
40.2 MB
, 在所有 TypeScript 提交中击败了
79.17%
的用户
 */
function subsetsWithDupTwo(nums: number[]): number[][] {
    let tempArr = Array<number>()
    let ans = Array<number[]>()

    /**
     * 
     * @param index 选择的位置
     * @param len 总长度
     * @param choose 是否选择当前index的值，若发现没有选择上一个数，且当前数字与上一个数相同，则可以跳过当前生成的子集。
     */
    let dfs = (index, len, choose) => {
        if (index === len) {
            ans.push([...tempArr])
            return
        }
        dfs(index + 1, len, false)// 没有选择index对应的值
        if (!choose && index > 0 && nums[index - 1] === nums[index]) {
            return
        }
        tempArr.push(nums[index])// 选择
        dfs(index + 1, len, true)
        tempArr.pop()// 需要选择
        
    }
    // 排序
    nums.sort((left, right) => {
        return left > right ? 1 : -1
    })
    // 调用
    dfs(0, nums.length, false)

    return ans
};