/*
* @Author: litao
* @Date:   2018-01-05 16:58:11
* @Last Modified by:   litao
* @Last Modified time: 2018-01-05 17:19:02
*/


/**

 *

 * @desc 返回一个指定区间内的随机数

 * @param {Number} num1

 * @param {Number} num2

 * @return {Number}

 */
 function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
 }


 /**

 *

 * @desc 返回一个数组内的最大值

 * @param {Array} arr

 * @return {Number}

 */
 function getMaxInArrray(arr) {
    return Math.max.apply(Math, arr);
 }