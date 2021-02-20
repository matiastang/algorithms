/*
 * @Author: tangdaoyong
 * @Date: 2021-02-20 16:21:23
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-02-20 16:26:49
 * @Description: 幂运算
 */
/**
 * @description: 求幂
 * @param {number} N
 * @param {number} M
 * @return {number}
 */
function power(N: number, M: number): number {
    // 特殊处理
    if (M <= 0) {
        return 1;
    }
    if (M % 2 === 1) {// 奇数
        return N * power(N, M - 1);
    } else {// 偶数
        let K = power(N, M / 2)
        return K * K
    }
}