/**
 * 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,
 * 他马上就写出了正确答案是100。
 * 但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
 * 没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
 * 现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? 
 * Good Luck!
 */

function FindContinuousSequence(sum) {
    let mid = Math.floor(sum / 2);
    let res = [];
    // 1. 左边界
    for (let i = 1; i <= mid; i++) {
        // 2. 右边界
        for (let j = i + 1; j < sum; j++) {
            // 3. 确定左右边界后 定义变量来计算累加的和 以及 存放数据
            let temp = 0,
                arr = [];
            // 4. 确定左右边界后 循环 边界中的值
            for (let k = i; k <= j; k++) {
                temp += k;
            }
            // 5. 判断和
            if (temp === sum) {
                // 5.1 如果相等 就把这组数据加入到临时数组中
                for (let l = i; l <= j; l++) {
                    arr.push(l);
                }
                res.push(arr);
            } else if (temp > sum) {
                // 5.2 如果比 sum 大 终止循环
                break;
            }
        }
    }

    return res
}

function FindContinuousSequence(sum) {
    let mid = Math.floor(sum / 2);
    let res = [];
    // 1. 左边界
    for (let i = 1; i <= mid; i++) {
        // 2. 右边界
        for (let j = i + 1; j < sum; j++) {
            // 3. 确定左右边界后 定义变量来计算累加的和 以及 存放数据
            let temp = 0,
                arr = [];
            // 4. 确定左右边界后 循环 边界中的值
            for (let k = i; k <= j; k++) {
                temp += k;
            }
            // 5. 判断和
            if (temp === sum) {
                // 5.1 如果相等 就把这组数据加入到临时数组中
                for (let l = i; l <= j; l++) {
                    arr.push(l);
                }
                res.push(arr);
            } else if (temp > sum) {
                // 5.2 如果比 sum 大 终止循环
                break;
            }
        }
    }
}

console.log(FindContinuousSequence(100));