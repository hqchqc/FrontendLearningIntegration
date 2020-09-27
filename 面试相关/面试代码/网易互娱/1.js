/**
 * 匹配字符串 
 * []
 */
function search(data) {
    // 转换为数组
    data = data.split('');
    // 
    let leftNum = 0,
        rightNum = 0,
        centerNum = 0,
        flag = 3;
    //
    for (let i = 0; i < data.length; i++) {
        if (data[i] === '[') {
            leftNum++;
            flag = 0;
        } else if (data[i] === ']') {
            if(flag === 0){
                flag = 1
            }else{
                flag = 0
            }
            rightNum++;
        } else if (data[i] === '.') {
            centerNum++;
        }
    }
    if(flag === 0){
        return false;
    }
    //
    if (leftNum === rightNum) {
        return true
    } else if (leftNum + centerNum === rightNum) {
        return true
    } else if (leftNum === rightNum + centerNum) {
        return true
    } else {
        return false
    }

}

let str = ''

console.log(search(str));