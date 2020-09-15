// 力扣 838
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    var len = dominoes.length
    var arr = dominoes.split("")//字符串转数组
    var i = 0, j = 0
    while (i < len) {
        if (arr[j] == '.' && arr[i] == 'L') {
            while (i !== j) {
                arr[j] = 'L'
                j++
            }
            j = i
        }
        if (arr[j] == '.' && arr[i] == 'R') {
            j = i
        }
        if (arr[j] == 'L' && arr[i] == 'L') {
            while (i !== j) {
                arr[j] = 'L'
                j++
            }
            j = i
        }
        if (arr[j] == 'L' && arr[i] == 'R') {
            j = i
        }
        if (arr[j] == 'R' && arr[i] == 'R') {
            while (i !== j) {
                arr[j] = 'R'
                j++
            }
            j = i
        }
        if (arr[j] == 'R' && arr[i] == 'L') {
            let m = i
            while (j < m) {
                arr[j] = 'R'
                arr[m] = 'L'
                j++
                m--
            }
            j = i
        }
        if (i === len-1 && arr[j] == 'L' && arr[i] == '.') {
            j = i
        }
        if (i === len-1 && arr[j] == 'R' && arr[i] == '.') {
            while (j <= i) {
                arr[j] = 'R'
                j++
            }
            j = i
        }
        i++
    }
    return arr.join("")
};