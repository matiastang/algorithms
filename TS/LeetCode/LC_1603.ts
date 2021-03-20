/*
 * @Author: tangdaoyong
 * @Date: 2021-03-19 09:16:21
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-19 09:18:58
 * @Description: file content
 */
/*
1603. 设计停车系统
请你给一个停车场设计一个停车系统。停车场总共有三种不同大小的车位：大，中和小，每种尺寸分别有固定数目的车位。

请你实现 ParkingSystem 类：

ParkingSystem(int big, int medium, int small) 初始化 ParkingSystem 类，三个参数分别对应每种停车位的数目。
bool addCar(int carType) 检查是否有 carType 对应的停车位。 carType 有三种类型：大，中，小，分别用数字 1， 2 和 3 表示。一辆车只能停在  carType 对应尺寸的停车位中。如果没有空车位，请返回 false ，否则将该车停入车位并返回 true 。
提示：

0 <= big, medium, small <= 1000
carType 取值为 1， 2 或 3
最多会调用 addCar 函数 1000 次

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-parking-system
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * 172 ms	45.5 MB	TypeScript
执行用时：
172 ms
, 在所有 TypeScript 提交中击败了
53.85%
的用户
内存消耗：
45.5 MB
, 在所有 TypeScript 提交中击败了
96.15%
的用户
 */
class ParkingSystem {

    big = 0
    medium = 0
    small = 0

    constructor(big: number, medium: number, small: number) {
        this.big = big
        this.medium = medium
        this.small = small
    }

    addCar(carType: number): boolean {
        if (carType === 1) {
            if (this.big >= 1) {
                this.big -= 1
                return true
            }
            return false
        }
        if (carType === 2) {
            if (this.medium >= 1) {
                this.medium -= 1
                return true
            }
            return false
        }
        if (carType === 3) {
            if (this.small >= 1) {
                this.small -= 1
                return true
            }
            return false
        }
        return false
    }
}

/**
 * 168 ms	45.4 MB	TypeScript
 */
class ParkingSystemOne {

    big = 0
    medium = 0
    small = 0

    constructor(big: number, medium: number, small: number) {
        this.big = big
        this.medium = medium
        this.small = small
    }

    addCar(carType: number): boolean {
        if (carType === 1 && this.big >= 1) {
            this.big -= 1
            return true
        }
        if (carType === 2 && this.medium >= 1) {
            this.medium -= 1
            return true
        }
        if (carType === 3 && this.small >= 1) {
            this.small -= 1
            return true
        }
        return false
    }
}