/*
 * @Author: tangdaoyong
 * @Date: 2021-06-10 09:58:02
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-10 10:46:25
 * @Description: 鸡蛋掉落
 */
/*
鸡蛋掉落
给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。

已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。

每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。

请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？

 
示例 1：

输入：k = 1, n = 2
输出：2
解释：
鸡蛋从 1 楼掉落。如果它碎了，肯定能得出 f = 0 。 
否则，鸡蛋从 2 楼掉落。如果它碎了，肯定能得出 f = 1 。 
如果它没碎，那么肯定能得出 f = 2 。 
因此，在最坏的情况下我们需要移动 2 次以确定 f 是多少。 
示例 2：

输入：k = 2, n = 6
输出：3
示例 3：

输入：k = 3, n = 14
输出：4
 

提示：

1 <= k <= 100
1 <= n <= 104


作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions/xmup75/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

/**
 * 不考虑鸡蛋个数限制的情况下，二分查找找出最少次数
 * @param k 
 * @param n 
 * @returns 
 */
function superEggDrop(k: number, n: number): number {
    let temp = 1, ans = 1
    while (temp < n) {
        temp = temp * 2
        // ans += 1
        console.log(`${temp}楼，最小移动次数${ans + 1}`)
        if (temp < n) {
            ans += 1
        }
    }
    return ans
};

/**
 * 考虑鸡蛋个数限制的情况下，动态规划，从底楼开始试，每次前进楼的层数不能超过剩余鸡蛋能测出的最大层数，不然如果失败，则不能使用剩余鸡蛋找出f
 * @param k 
 * @param n 
 * @returns 
 */
function superEggDropOne(k: number, n: number): number {
    // dp[i]表示i楼不考虑鸡蛋个数显示的情况下，最小移动次数
    // arr[i]表i个鸡蛋最多能进准找出f的最大楼层
    let dp = Array<number>(), arr = Array<number>()
    dp[0] = 0
    dp[1] = 1
    arr[0] = 0
    arr[1] = 1
    let temp = 1, count = 1
    while (temp < n) {
        count += 1
        for (let i = temp; i < temp * 2; i++) {
            dp.push(count)
        }
        temp = temp * 2
        arr.push(temp)
        console.log(`${temp}楼，最小移动次数${count}`)
        console.log(`${count}个鸡蛋，最大能测试的楼层`)
    }
    // 此处得到最少使用的鸡蛋个数count
    // 再根据鸡蛋个数k得出要移动的次数
    console.log(dp)
    console.log(arr)
    if (k >= count) {
        return count
    }
    return Math.floor(n / arr[k]) + dp[arr[k]]
};