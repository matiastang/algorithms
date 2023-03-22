/*
 * @Author: tangdaoyong
 * @Date: 2023-03-22 22:33:39
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-23 01:02:19
 * @Description: 1626. 无矛盾的最佳球队
 */
/*
1626. 无矛盾的最佳球队
假设你是球队的经理。对于即将到来的锦标赛，你想组合一支总体得分最高的球队。球队的得分是球队中所有球员的分数 总和 。

然而，球队中的矛盾会限制球员的发挥，所以必须选出一支 没有矛盾 的球队。如果一名年龄较小球员的分数 严格大于 一名年龄较大的球员，则存在矛盾。同龄球员之间不会发生矛盾。

给你两个列表 scores 和 ages，其中每组 scores[i] 和 ages[i] 表示第 i 名球员的分数和年龄。请你返回 所有可能的无矛盾球队中得分最高那支的分数 。

 

示例 1：

输入：scores = [1,3,5,10,15], ages = [1,2,3,4,5]
输出：34
解释：你可以选中所有球员。
示例 2：

输入：scores = [4,5,6,5], ages = [2,1,2,1]
输出：16
解释：最佳的选择是后 3 名球员。注意，你可以选中多个同龄球员。
示例 3：

输入：scores = [1,2,3,5], ages = [8,9,10,1]
输出：6
解释：最佳的选择是前 3 名球员。
 

提示：

1 <= scores.length, ages.length <= 1000
scores.length == ages.length
1 <= scores[i] <= 106
1 <= ages[i] <= 1000
*/
function bestTeamScoreOne(scores: number[], ages: number[]): number {
    const arr = ages.map((age, i) => {
        return {
            age,
            score: scores[i]
        }
    })
    const sortArr = arr.sort((left, right) => {
        if (left.age === right.age) {
            return left.score - right.score
        }
        return left.age - right.age
    })
    const dp = Array(sortArr.length)
    let ans = 0
    for (let i = 0; i < sortArr.length; i++) {
        dp[i] = sortArr[i].score
        for (let j = 0; j < i; j++) {
            if (sortArr[j].score <= sortArr[i].score) {
                dp[i] = Math.max(dp[i], dp[j] + sortArr[i].score)
            }
        }
        ans = Math.max(ans, dp[i])
    }
    return ans
};

function bestTeamScore(scores: number[], ages: number[]): number {
    const arr = ages.map((age, i) => {
        return {
            age,
            score: scores[i]
        }
    })
    const sortArr = arr.sort((left, right) => {
        return left.age - right.age
    })
    let last = sortArr[0]
    let sum = sortArr[0].score
    for (let i = 1; i < sortArr.length; i++) {
        const item = sortArr[i];
        if (item.age === last.age) {
            last.score = Math.max(last.score, item.score)
            sum += item.score
            continue
        }
        if (item.score > last.score) {
            last = item
            sum += item.score
        }
    }
    return sum
};