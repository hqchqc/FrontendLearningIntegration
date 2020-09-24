/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 *  所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */
// [1,2,3,4,5]

function reOrderArray(array)
{
    let ou = [],
        qi = [];
    for(let i = 0; i<array.length; i++){
        if(array[i] % 2 === 0){
            ou.push(array[i])
        }else{
            qi.push(array[i])
        }
    }
    return qi.concat(ou);
}

