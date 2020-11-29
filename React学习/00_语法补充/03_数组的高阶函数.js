let names = ['zxy','hqc','cmm','zt'];

/**
 * map里的回调函数有三个参数
 *  第一个参数： 遍历到的那个数据项
 *  第二个参数： 下标值
 *  第三个参数： 数组本身
 * map会返回一个新的数组 是原本数组的一个映射
 */
let newNames = names.map((item,index,array) => {
    return item + '000'
})
console.log(newNames);