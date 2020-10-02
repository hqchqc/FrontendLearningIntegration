/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
 * 判断数组中是否含有该整数。
 */

 // 知识点： 二分查找

 // 解法一 暴力法
 function Find(target,array){
     for(let i=0; i<array.length; i++){
         for(let j = 0; j<array[0].length; j++){
             if(array[i][j] === target){
                return true
             }
         }
     }
     return false
 }

 // 解法二
 function Find(target, array)
{
    // 以右上角为起点
    let row = array.length - 1, 
        column = array[0].length, 
        hang = 0,   
        lie = column - 1; 
    while( hang <= row && lie >= 0 ){
        if(array[hang][lie] === target){
            return true
        }
        if( array[hang][lie] > target ){
            lie--
        }else if( array[hang][lie] <  target ){
            hang++
        }
    }
    
    return false
}
console.log(Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]))

