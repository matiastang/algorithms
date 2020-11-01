
/*
写一个js函数，实现对一个数字每3位加一个逗号，如输入100000， 输出100,000（不考虑负数，小数）—百度前端面试题
*/
function numberTo(number) {
    if (number === null) {
        return 
    }
    let arr = []
    let numberStr = parseInt(number).toString()

    function getNumberLastThree(numberStr) {
        if (numberStr.length <= 3) {
            arr.push(numberStr)
        } else {
            arr.push(numberStr.slice(-3))
            getNumberLastThree(numberStr.slice(0, numberStr.length - 3)) 
        }
    }
    getNumberLastThree(numberStr)
    console.log(arr)
    return arr.reverse().join(',')
}

console.log(numberTo(10000000))