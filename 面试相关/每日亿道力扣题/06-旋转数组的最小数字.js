/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 *  输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
 *  例如数组[3,4,5,1,2]为[1,2,3,4,5]的一个旋转，该数组的最小值为1。
 *  NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

 // 方法一 直接找最小元素
function minNumberInRotateArray(rotateArray) {
    if (rotateArray.length === 0) return 0;

    let minIndex = 0;
    for (let i = 0; i < rotateArray.length; i++) {
        if (rotateArray[minIndex] > rotateArray[i]) {
            minIndex = i;
        }
    }

    return rotateArray[minIndex];
}

// 方法二 二分查找
function minNumberInRotateArray(rotateArray){
    let left = 0,
        right = rotateArray.length - 1;
    
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(rotateArray[mid] > rotateArray[right]){
            left = mid + 1;
        }else if(rotateArray[mid] < rotateArray[right]){
            right = mid;
        }else{
            right--;
        }
    }

    return rotateArray[mid];
}