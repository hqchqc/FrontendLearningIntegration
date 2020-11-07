/**
 * 如何得到一个数据流中的中位数？
 * 如果从数据流中读出奇数个数值，
 * 那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，
 * 那么中位数就是所有数值排序之后中间两个数的平均值。
 * 我们使用Insert()方法读取数据流，
 * 使用GetMedian()方法获取当前读取数据的中位数。
 */
const data = [];

function Insert(num) {
    // 读取数据流
    data.push(num);
}

function GetMedian() {
    // 获取当前读取数据的中位数。
    if (data.length === 0) return;
    if (data.length === 1) return data[0];
    data.sort();
    if (data.length % 2 === 0) {
        let mid = Math.floor(data.length / 2);
        return Math.floor(data[mid] + data[mid - 1]) / 2

    } else {
        return data[((data.length + 1) / 2) - 1];
    }
}