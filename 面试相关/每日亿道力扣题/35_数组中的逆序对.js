/**
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组,求出这个数组中的逆序对的总数 P。
 * 并将P对1000000007取模的结果输出。 即输出P%1000000007
 */
function InversePairs(data) {
    let mid = Math.floor(data.length / 2);
    let left = data.slice(0,mid);
    let right = data.slice(mid,data.length);
    return merge(InversePairs(left),InversePairs(right));
}

function merge(left,right){
    let res = [];
    let num;
    let i = 0, j = 0;

    while(i < left.length && j < right.length){
        
    }
}
InversePairs([1,2,3,4,5,6,7,0])