/**
 * 题目：字符串移动（字符串为*号和26个字母的任意组合，把*号都移动到最左侧，把字母移到最右侧并保持相对顺序不变）
 */
function remove(arr) {
    if (!Array.isArray(arr)) return

    let arr1 = [],
        arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === '*'){
            arr1.push(arr[i])
        }else{
            arr2.push(arr[i])
        }
    }

    return arr1.concat(...arr2)
}

let arr = [4,3,'*',4,'*',46,'*']
console.log(remove(arr))