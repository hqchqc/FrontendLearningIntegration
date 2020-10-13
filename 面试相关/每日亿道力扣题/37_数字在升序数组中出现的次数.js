/**
 * 统计一个数字在升序数组中出现的次数。
 */
function GetNumberOfK(data, k) {
    let res = 0;
    data.forEach(item => {
        if(item == k){
            res++;
        }
    })
    return res
}

console.log(GetNumberOfK([5,7,7,8,8,10],8));