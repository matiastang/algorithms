/*
 * @Author: tangdaoyong
 * @Date: 2021-05-08 09:06:07
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-08 10:09:17
 * @Description: 完成所有工作的最短时间
 */
/*
1723. 完成所有工作的最短时间
给你一个整数数组 jobs ，其中 jobs[i] 是完成第 i 项工作要花费的时间。

请你将这些工作分配给 k 位工人。所有工作都应该分配给工人，且每项工作只能分配给一位工人。工人的 工作时间 是完成分配给他们的所有工作花费时间的总和。请你设计一套最佳的工作分配方案，使工人的 最大工作时间 得以 最小化 。

返回分配方案中尽可能 最小 的 最大工作时间 。

 

示例 1：

输入：jobs = [3,2,3], k = 3
输出：3
解释：给每位工人分配一项工作，最大工作时间是 3 。
示例 2：

输入：jobs = [1,2,4,7,8], k = 2
输出：11
解释：按下述方式分配工作：
1 号工人：1、2、8（工作时间 = 1 + 2 + 8 = 11）
2 号工人：4、7（工作时间 = 4 + 7 = 11）
最大工作时间是 11 。
 

提示：

1 <= k <= jobs.length <= 12
1 <= jobs[i] <= 107
*/
/**
 * 5，5，4，4，4失败
 * @param jobs 
 * @param k 
 * @returns 
 */
function minimumTimeRequired(jobs: number[], k: number): number {
    // 特殊情况处理
    if (k === 1) {
        return jobs.reduce((sum, value, index, arr) => {
            return sum + value
        })
    }
    // 排序,从大到小
    jobs.sort((left, right) => {
        return right - left
    })
    // console.log(jobs)
    // 从大到小分配，每次把值分配给和最小的一个
    // 特殊情况处理
    if (jobs.length <= k) {
        return jobs[0]
    }
    // 创建缓存数组，缓存每个人当前任务的总时长
    let sums = Array<number>(k)
    for (let i = 0; i < k; i++) {
        sums[i] = jobs[i]
    }
    // 最小位置
    let minIndex = k - 1
    // 分配任务
    for (let i = k; i < jobs.length; i++) {
        // if (i === k) {// sums最后一个肯定是最小的（仅限于第一次）
        //     sums[k - 1] = jobs[k]
        //     continue
        // }
        // // 查找最小的位置
        sums[minIndex] = sums[minIndex] + jobs[i]
        // 更新最小的位置
        let min = Number.MAX_VALUE
        for (let j = 0; j < k; j++) {
            if (sums[j] < min) {
                min = sums[j]
                minIndex = j
            }            
        }
        // console.log(`最小位置${minIndex}`)
    }
    // console.log(sums)
    // 找出最大值
    let max = Number.MIN_VALUE
    for (let j = 0; j < k; j++) {
        if (sums[j] > max) {
            max = sums[j]
        }            
    }
    return max
};