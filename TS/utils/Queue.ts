/*
 * @Author: tangdaoyong
 * @Date: 2021-03-02 11:50:33
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-02 12:02:02
 * @Description: 队列
 */
/**
* 使用Array模拟队列
* shift()方法：移除数组中的第一项并返回该项
* push()方法：从数组末端添加项
* unshift()方法：在数组的前端添加项
* pop()方法：从数组末端移除项
*/
/**
 * 泛型队列
 */
export default class QueueT<T> {
    /**
     * 队列数据
     */
    private data = Array<T>();
    /**
     * 队列大小
     */
    size = (): number => this.data.length;
    /**
     * 入队列
     * @param item 
     */
    push = (item: T) => this.data.push(item);
    /**
     * 出队列
     * 当data为空时返回undefined
     */
	pop = (): T | undefined => this.data.shift();
}