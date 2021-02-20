/*
 * @Author: tangdaoyong
 * @Date: 2021-02-20 14:24:16
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-02-20 15:39:51
 * @Description: 素数
 */
const N = 50;
/*========暴力解========*/
/**
 * @description: 是否是素数
 * @param {number} num
 * @return {Boolean}
 */
function isPrimesOne(num: number): Boolean {
    for (let index = 2; index < num; index++) {
        if (num % index === 0) {
            return false;
        }
    }
    return true;
}
/**
 * @description: 查找素数个数
 * @param {number} num
 * @return {*}
 */
function countPrimesOne(num: number):number {
    // 前置判断
    if (num < 2) {
        return 0
    }
    // 循环查找
    let count = 0;
    for (let index = 2; index < num; index++) {
        // 判断是否是素数
        if (isPrimesOne(index)) {
            console.log(index)
            count += 1;
        }
    }
    return count;
}
let startTime = new Date();
console.log(countPrimesOne(N));
let endTime = new Date();
// console.log(startTime.getUTCMilliseconds());
// console.log(endTime.getUTCMilliseconds());
console.log(`用时${endTime.getUTCMilliseconds() - startTime.getUTCMilliseconds()}`);
/*========优化一========*/
/**
 * @description: 是否是素数
 * @param {number} num
 * @return {Boolean}
 */
function isPrimesTwo(num: number): Boolean {
    // 注意需要<=
    for (let index = 2; index * index <= num; index++) {
        if (num % index === 0) {
            return false;
        }
    }
    return true;
}
/**
 * @description: 查找素数个数
 * @param {number} num
 * @return {*}
 */
function countPrimesTwo(num: number):number {
    // 前置判断
    if (num < 2) {
        return 0
    }
    // 循环查找
    let count = 0;
    for (let index = 2; index < num; index++) {
        // 判断是否是素数
        if (isPrimesTwo(index)) {
            console.log(index)
            count += 1;
        }
    }
    return count;
}
startTime = new Date();
console.log(countPrimesTwo(N));
endTime = new Date();
// console.log(startTime.getUTCMilliseconds());
// console.log(endTime.getUTCMilliseconds());
console.log(`用时${endTime.getUTCMilliseconds() - startTime.getUTCMilliseconds()}`);
/*========优化二========*/
/**
 * @description: 查找素数个数
 * @param {number} num
 * @return {*}
 */
function countPrimesThree(num: number):number {
    // 前置判断
    if (num < 2) {
        return 0
    }
    // 声明一个num长的数组，其中的bool值代表是否是素数
    /*
    **注意**：`map`不会对空数组进行检测，不会处理空值等，不会改变原始数组。
    Array<boolean>(num)初始化的数组没有默认值：[ <10 empty items>]
    所以不会进入map的处理方法中。
    */
    // let isPrimes = Array<boolean>(num).map((bool, index) => {
    //     return index > 1;
    // });
    let isPrimes = Array<boolean>(num)
    for (let index = 0; index < isPrimes.length; index++) {
        isPrimes[index] = index > 1;
    }
    // console.log(isPrimes);
    // 循环排除
    for (let index = 2; index < num; index++) {
        // index是素数
        if (isPrimes[index]) {
            // index的倍数一定不是素数，设置为false
            for (let j = 2 * index; j < num; j += index) {
                isPrimes[j] = false;
            }
        }
    }
    // 使用filter不是很好
    // return isPrimes.filter((item) => {
    //     return item
    // }).length;
    let count = 0;
    for (let index = 2; index < isPrimes.length; index++) {
        if (isPrimes[index]) {
            console.log(index)
            count += 1
        }
    }
    return count;
}
startTime = new Date();
console.log(countPrimesThree(N));
endTime = new Date();
// console.log(startTime.getUTCMilliseconds());
// console.log(endTime.getUTCMilliseconds());
console.log(`用时${endTime.getUTCMilliseconds() - startTime.getUTCMilliseconds()}`);
/*========优化三========*/
/**
 * @description: 查找素数个数
 * @param {number} num
 * @return {*}
 */
function countPrimes(num: number):number {
    // 前置判断
    if (num < 2) {
        return 0
    }
    // 声明一个num长的数组，其中的bool值代表是否是素数
    /*
    **注意**：`map`不会对空数组进行检测，不会处理空值等，不会改变原始数组。
    Array<boolean>(num)初始化的数组没有默认值：[ <10 empty items>]
    所以不会进入map的处理方法中。
    */
    // let isPrimes = Array<boolean>(num).map((bool, index) => {
    //     return index > 1;
    // });
    let isPrimes = Array<boolean>(num)
    for (let index = 0; index < isPrimes.length; index++) {
        isPrimes[index] = index > 1;
    }
    // console.log(isPrimes);
    // 循环排除
    for (let index = 2; index * index < num; index++) {
        // index是素数
        if (isPrimes[index]) {
            // index的倍数一定不是素数，设置为false
            for (let j = index * index; j < num; j += index) {
                isPrimes[j] = false;
            }
        }
    }
    let count = 0;
    for (let index = 2; index < isPrimes.length; index++) {
        if (isPrimes[index]) {
            console.log(index)
            count += 1
        }
    }
    return count;
}
startTime = new Date();
console.log(countPrimes(N));
endTime = new Date();
// console.log(startTime.getUTCMilliseconds());
// console.log(endTime.getUTCMilliseconds());
console.log(`用时${endTime.getUTCMilliseconds() - startTime.getUTCMilliseconds()}`);