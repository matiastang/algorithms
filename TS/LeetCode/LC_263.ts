/*
 * @Author: tangdaoyong
 * @Date: 2021-04-10 10:32:36
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-10 11:17:15
 * @Description: 丑数
 */
/*
263. 丑数
给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。

丑数 就是只包含质因数 2、3 和/或 5 的正整数。

 

示例 1：

输入：n = 6
输出：true
解释：6 = 2 × 3
示例 2：

输入：n = 8
输出：true
解释：8 = 2 × 2 × 2
示例 3：

输入：n = 14
输出：false
解释：14 不是丑数，因为它包含了另外一个质因数 7 。
示例 4：

输入：n = 1
输出：true
解释：1 通常被视为丑数。
 

提示：

-231 <= n <= 231 - 1
*/
/**
 * 超出时间
 * @param n 
 * @returns 
 */
function isUgly(n: number): boolean {
    if (n <= 0) {
        return false
    }
    var results = [];
    var primes = prime(n);
    var tmp = n;
    for (var i = 0; i < primes.length; i++) {
        if (tmp == primes[i]) {
            // 做判断
            if (primes[i] > 5) {
                return false
            } else {
                results.push(primes[i]);
            }
            // results.push(primes[i]);
            break;
        }
        while (tmp % primes[i] == 0) {
            tmp /= primes[i];
            // 做判断
            if (primes[i] > 5) {
                return false
            } else {
                results.push(primes[i]);
            }
            // results.push(primes[i]);
        }
    }
    if (results.length == 1) {
        results = [];
        results.push(1);
        if (n > 5) {
            return false
        } else {
            results.push(n);
        }
        // results.push(v);
    }
    return true;
};

/**
 * 当 n>0n>0 时，若 nn 是丑数，则 nn 可以写成 n = 2^a \times 3^b \times 5^cn=2 
a
 ×3 
b
 ×5 
c
  的形式，其中 a,b,ca,b,c 都是非负整数。特别地，当 a,b,ca,b,c 都是 00 时，n=1n=1。
 * @param n 
 * @returns 
 * 执行用时：
100 ms
, 在所有 TypeScript 提交中击败了
76.47%
的用户
内存消耗：
39.4 MB
, 在所有 TypeScript 提交中击败了
88.24%
的用户
 */
function isUglyOne(n: number): boolean {
    if (n <= 0) {
        return false
    }
    let arr = [2, 3, 5]
    for (let i = 0; i < arr.length; i++) {
        while (n % arr[i] === 0) {
            n /= arr[i]
        }
    }
    return n === 1
};

/**
 * 特殊处理2
 * @param n 
 * @returns 
 * 执行用时：
96 ms
, 在所有 TypeScript 提交中击败了
91.18%
的用户
内存消耗：
39.4 MB
, 在所有 TypeScript 提交中击败了
91.18%
的用户
 */
function isUglyTwo(n: number): boolean {
    if (n <= 0) {
        return false
    }
    let arr = [3, 5]
    while ((n & 1) === 0) {
        n = n >> 1
    }
    for (let i = 0; i < arr.length; i++) {
        while (n % arr[i] === 0) {
            n /= arr[i]
        }
    }
    return n === 1
};

/**
 * 112 ms	39.6 MB	TypeScript,时间反而多了是，因为数组没有缓存
 * @param n 
 * @returns 
 */
function isUglyThree(n: number): boolean {
    if (n <= 0) {
        return false
    }
    while ((n & 1) === 0) {
        n = n >> 1
    }
    while (n % 3 === 0) {
        n /= 3
    }
    while (n % 5 === 0) {
        n /= 5
    }
    return n === 1
};

/**
 * 
 * @param n 
 * @returns 
 * 执行用时：
80 ms
, 在所有 TypeScript 提交中击败了
100.00%
的用户
内存消耗：
39.4 MB
, 在所有 TypeScript 提交中击败了
85.29%
的用户
 */
function isUglyFour(n: number): boolean {
    if (n <= 0) {
        return false
    }
    let num = 1
    while ((n & num) === 0) {
        n = n >> num
    }
    num = 3
    while ((n % num) === 0) {
        n /= num
    }
    num = 5
    while ((n % num) === 0) {
        n /= num
    }
    return n === 1
};


/**
 * maxValue一下的质数
 * @param maxValue 
 * @returns 
 */
function prime(maxValue) {
    var minPrime = 2;
    var primes = [minPrime];
    for (var i = 3; i <= maxValue; i++) {
        var isPrime = true;
        for (var p = 0; p < primes.length; p++) {
            if (i % primes[p] == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}

/**
 * v的质因数
 * @param v 
 * @returns 
 */
function decomposition(v) {
    var results = [];
    var primes = prime(v);
    var tmp = v;
    for (var i = 0; i < primes.length; i++) {
        if (tmp == primes[i]) {
            results.push(primes[i]);
            break;
        }
        while (tmp % primes[i] == 0) {
            tmp /= primes[i];
            results.push(primes[i]);
        }
    }
    if (results.length == 1) {
        results = [];
        results.push(1);
        results.push(v);
    }
    return results;
}