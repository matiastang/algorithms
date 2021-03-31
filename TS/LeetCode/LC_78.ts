/*
 * @Author: tangdaoyong
 * @Date: 2021-03-31 21:18:23
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-31 22:24:14
 * @Description: 子集
 */
/*
78. 子集
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同
*/
/**
 * 每个元素不同，所以现有结果数组中的每个值，加上当前的数字，是没有重复的。
 * @param nums 
 * @returns 
 * 执行用时：
88 ms
, 在所有 TypeScript 提交中击败了
96.33%
的用户
内存消耗：
40.2 MB
, 在所有 TypeScript 提交中击败了
65.14%
的用户
 */
function subsets(nums: number[]): number[][] {
    let ans = Array<number[]>()
    ans.push([])
    for (let i = 0; i < nums.length; i++) {
        const len = ans.length// 长度固化，防止改变
        for (let j = 0; j < len; j++) {
            ans.push([...ans[j], nums[i]])
        }
    }
    return ans
};

/**
 * 回溯算法
 * @param nums 
 * @returns 
 * 执行用时：
92 ms
, 在所有 TypeScript 提交中击败了
82.57%
的用户
内存消耗：
40.1 MB
, 在所有 TypeScript 提交中击败了
80.73%
的用户
 */
function subsetsOne(nums: number[]): number[][] {
    let tempArr = Array<number>()
    let ans = Array<number[]>()

    /**
     * 
     * @param index 选择的位置
     * @param len 总长度
     */
    let dfs = (index, len) => {
        if (index === len) {
            ans.push([...tempArr])
            return
        }
        tempArr.push(nums[index])// 选择
        dfs(index + 1, len)
        tempArr.pop()// 需要选择
        dfs(index + 1, len)// 没有选择index对应的值
    }

    // 调用
    dfs(0, nums.length)

    return ans
};