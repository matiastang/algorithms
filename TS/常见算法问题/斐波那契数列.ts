/*
 * @Author: tangdaoyong
 * @Date: 2021-03-01 09:34:07
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-01 09:45:01
 * @Description: 斐波那契数列
 */
/*
斐波那契数列（Fibonacci sequence），又称黄金分割数列，因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应用，为此，美国数学会从 1963 年起出版了以《斐波纳契数列季刊》为名的一份数学杂志，用于专门刊载这方面的研究成果。
*/
/**
 * 递归得到斐波那契数
 * @param n 
 */
function fibonacci_recursion(n: number): number {
    // n = 0, 1时给出recursion终止条件
    if (n <= 1) {
        return n
    }
    return fibonacci_recursion(n - 1) + fibonacci_recursion(n - 2)
}

/**
 * 迭代得到斐波那契数
 * @param n 
 */
function fibonacci_iteration(n: number): number {
    // n = 0, 1时给出recursion终止条件
    if (n <= 1) {
        return n
    }
    let temp = 0, temp1 = 0, temp2 = 1
    for (let i = 2; i <= n; i++) {
        temp = temp1 + temp2
        temp1 = temp2
        temp2 = temp
    }
    return temp
}