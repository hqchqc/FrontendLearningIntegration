/**
 * 比较版本号 1.1.2  1.112.1
 */

function compare(ver1, ver2) {
    // 按照 . 进行分割
    let version1 = ver1.split('.'),
        version2 = ver2.split('.');
    
    // 判断长度 
    let len = Math.max(version1.length, version2.length);
    // 遍历以长的为标准
    for(let i=0; i<len; i++){
        // 如果 两边的数字相等 继续比较
        if(parseInt(version1[i]) === parseInt(version2[i])) continue;
        // 将每一位转换为整型进行比较后 返回结果
        return parseInt(version1[i]) > parseInt(version2[i]) ? 1 : -1
    }
    return -1
}
console.log(compare('10.11.111','10.2.2'));