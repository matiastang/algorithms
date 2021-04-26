/*
 * @Author: tangdaoyong
 * @Date: 2021-04-26 09:21:23
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-26 10:30:58
 * @Description: 在 D 天内送达包裹的能力
 */
/*
1011. 在 D 天内送达包裹的能力
传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

 

示例 1：

输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
输出：15
解释：
船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
第 1 天：1, 2, 3, 4, 5
第 2 天：6, 7
第 3 天：8
第 4 天：9
第 5 天：10

请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 
示例 2：

输入：weights = [3,2,2,4,1,4], D = 3
输出：6
解释：
船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
第 1 天：3, 2
第 2 天：2, 4
第 3 天：1, 4
示例 3：

输入：weights = [1,2,3,1,1], D = 4
输出：3
解释：
第 1 天：1
第 2 天：2
第 3 天：3
第 4 天：1, 1
 

提示：

1 <= D <= weights.length <= 50000
1 <= weights[i] <= 500
*/
function shipWithinDays(weights: number[], D: number): number {
    if (weights.length === 1) {
        return weights[0]
    }
    // 循环合并最小的两位，直到D === weights.length
    while (weights.length > D) {
        let add = 0
        let index = 0
        for (let i = 0; i < weights.length - 1; i++) {
            if (add === 0) {
                add = weights[i] + weights[i + 1]
                index = i
                continue
            }
            let newAdd = weights[i] + weights[i + 1]
            if (newAdd < add) {
                add = newAdd
                index = i
            }
        }
        weights.splice(index, 2, add)
    }
    // D === weights.length相等找最大值
    let ans = 0
    for (let i = 0; i < weights.length; i++) {
        if (ans < weights[i]) {
            ans = weights[i]
        }
    }
    return ans
};

/**
 * 查找出合并后最小的两位
 * @param weights 
 * @returns 
 */
function getAddMinIndex(weights: number[]): [number, number] {
    let add = 0
    let index = 0
    for (let i = 0; i < weights.length - 1; i++) {
        if (add === 0) {
            add = weights[i] + weights[i + 1]
            index = i
            continue
        }
        let newAdd = weights[i] + weights[i + 1]
        if (newAdd < add) {
            add = newAdd
            index = i
        }
    }
    return [index, add]
}

/**
 * 二分查找
 * @param weights 
 * @param D 
 * @returns 
 * 执行用时：100 ms, 在所有 TypeScript 提交中击败了100.00%的用户
 * 内存消耗：42.2 MB, 在所有 TypeScript 提交中击败了50.00%的用户
 */
function shipWithinDaysTwo(weights: number[], D: number): number {
    // 获取最大值
    let max = 0
    for (let i = 0; i < weights.length; i++) {
        if (max < weights[i]) {
            max = weights[i]
        }
    }
    if (weights.length === D) {
        return max
    }
    // 获取D为1的值
    let sum = weights.reduce((value, item) => {
        return value + item
    })
    if (D === 1) {
        return sum
    }
    // 二分查找，结果肯定落在max和sum之间
    while (max < sum) {
        let mid = Math.floor((sum + max) / 2)
        // 查找使用mid的船需要的天数
        let day = 1, add = 0
        for (let i = 0; i < weights.length; i++) {
            if (add + weights[i] > mid) {
                day += 1
                add = weights[i]
            } else {
                add += weights[i]
            }
        }
        // 判断是否符合要求
        if (day > D) {
            // 至少也要mid + 1才有可能满足要求
            max = mid + 1
        } else {
            sum = mid
        }
    }
    return max
}