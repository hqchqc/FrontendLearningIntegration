/**
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组,求出这个数组中的逆序对的总数 P。
 * 并将P对1000000007取模的结果输出。 即输出P%1000000007
 */
// function InversePairs(data) {
//     let sum = 0;
//     mergeSort(data);
//     return sum;

//     function mergeSort (nums) {
//         if(nums.length < 2) return nums;
//         const mid = parseInt(nums.length / 2);
//         let left = nums.slice(0,mid);
//         let right = nums.slice(mid);
//         return merge(mergeSort(left), mergeSort(right));
//     }

//     function merge(left, right) {
//         let res = [];
//         let leftLen = left.length;
//         let rightLen = right.length;
//         let len = leftLen + rightLen;
//         for(let index = 0, i = 0, j = 0; index < len; index ++) {
//             if(i >= leftLen) res[index] = right[j ++];
//             else if (j >= rightLen) res[index] = left[i ++];
//             else if (left[i] <= right[j]) res[index] = left[i ++];
//             else {
//                 res[index] = right[j ++];
//                 sum += leftLen - i;//在归并排序中唯一加的一行代码
//             }
//         }
//         return res;
//     }
// }

function InversePairs(data) {
    let sum = 0;
    mergeSort(data);
    return sum;

    function mergeSort(nums) {
        if (!Array.isArray(nums) || nums.length <= 0) return

        if (nums.length == 1) return nums

        let midIndex = Math.floor((nums.length) / 2),
            leftArr = nums.slice(0, midIndex),
            rightArr = nums.slice(midIndex, nums.length);

        return merge(mergeSort(leftArr), mergeSort(rightArr))
    }

    function merge(left, right) {
        let result = [],
            lf = 0,
            lr = 0;

        while (lf < left.length && lr < right.length) {
            if (left[lf] > right[lr]) {
                sum = sum + left.length - lf;
                result.push(right[lr]);
                lr++;
            } else {
                result.push(left[lf]);
                lf++;
            }
        }

        while (lf < left.length) {
            result.push(left[lf]);
            lf++;
        }

        while (lr < right.length) {
            result.push(right[lr]);
            lr++;
        }

        return result
    }
}


console.log(InversePairs([5, 4, 3, 2, 1]));