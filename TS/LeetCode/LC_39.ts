/*
 * @Author: tangdaoyong
 * @Date: 2021-04-25 09:52:31
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-25 13:51:33
 * @Description: 组合总和
 */
/*
39. 组合总和
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
示例 2：

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 

提示：

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
candidate 中的每个元素都是独一无二的。
1 <= target <= 500
*/
/**
 * 动态规划『
 * [ [ 3, 2, 2 ], [ 2, 3, 2 ], [ 2, 2, 3 ], [ 7 ] ]
 * 』顺序不同认为是不同的组合。和题目不匹配
 * @param candidates 
 * @param target 
 * @returns 
 */
function combinationSum(candidates: number[], target: number): number[][] {
    let dp = Array<number[][]>(target + 1)
    // 排序
    candidates = candidates.sort((left, right) => {
        return left > right ? 1 : -1
    })
    // 循环获取1...target的对应结果
    for (let i = 1; i <= target; i++) {
        let ans:number[][] = Array()
        for (let j = 0; j < candidates.length; j++) {
            let index = i - candidates[j]
            // 这里需要注意，i=0表示target为1，nums[j]表示当前数字。所以是>=-1
            // 如果dp声明为target+1，则可使用i表示target为i的结果
            if (index > 0) {
                ans = dp[index].map((item) => {
                    return [...item, candidates[j]]
                })
            } else if (index === 0) {
                ans.push([candidates[j]])
            } else {
                break
            }
        }
        dp[i] = ans
    }
    console.log(dp)
    // 输出目标结果
    return dp[target]
};

/**
 * 递归『
 * [ [ 3, 2, 2 ], [ 2, 3, 2 ], [ 2, 2, 3 ], [ 7 ] ]
 * 』顺序不同认为是不同的组合。和题目不匹配
 * @param candidates 
 * @param target 
 * @returns 
 */
function combinationSumOne(candidates: number[], target: number): number[][] {
    if (target <= 0) {
        return Array()
    }
    // 排序
    candidates = candidates.sort((left, right) => {
        return left > right ? -1 : 1
    })
    let ans:number[][] = Array()
    for (let j = 0; j < candidates.length; j++) {
        if (target === candidates[j]) {
            ans.push([candidates[j]])
        }
        if (target > candidates[j]) {
            ans.push(...combinationSum(candidates, target - candidates[j]).map((item) => {
                return [...item, candidates[j]]
            }))
        }
    }
    // return ans
    return ans.map((item) => {
        return item.sort((left, right) => {
            return left > right ? 1 : -1
        })
    }).filter((value, index, nums) => {
        return nums.indexOf(value) === index
    })
};

function filerArr(arr: number[][]) {
    return arr.map((item) => {
        return item.sort((left, right) => {
            return left > right ? 1 : -1
        })
    }).filter((value, index, nums) => {
        return nums.indexOf(value) === index
    })
}

function combinationSumTwo(candidates: number[], target: number): number[][] {
    candidates = candidates.sort((left, right) => {
        return left > right ? -1 : 1
    })
    let ans:number[][] = Array()
    let tempArr = Array<number>()

    function dfs(num: number) {
        if (num <= 0) {
            ans.push(tempArr)
            return
        }
        for (let j = 0; j < candidates.length; j++) {
            let newNum = num - candidates[j]
            if (newNum >= 0) {
                tempArr.push(candidates[j])// 选择
                dfs(newNum)
                tempArr.pop()// 取消选择
            }
        }
    }
    dfs(target)
    return ans
};