/**
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，
 * 每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，
 * 则该路径不能再进入该格子。 例如  [a b c e
 *                                s f c s
 *                                a d e e]
   矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，
   因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
 */

function hasPath(matrix, rows, cols, path) {
    let flag = new Array(matrix.length).fill(null);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(matrix, rows, cols, i, j, flag, path, 0)) {
                return true;
            }
        }
    }

    return false
}

function dfs(matrix, rows, cols, i, j, flag, str, k) {
    // 1. 获取对应一维数组的下标
    let index = i * cols + j;
    // 2. 临界值判断
    if (i < 0 || i >= rows || j < 0 || j >= cols || matrix[index] !== str[k] || flag[index] === true) {
        return false;
    }
    // 3. 如果走到最后了 返回true
    if (k === str.length - 1 ) {
        return true
    }
    // 4. 走过啦 标为 true
    flag[index] = true;
    // 4. 回溯 
    if (dfs(matrix, rows, cols, i - 1, j, flag, str, k + 1) ||
        dfs(matrix, rows, cols, i + 1, j, flag, str, k + 1) ||
        dfs(matrix, rows, cols, i, j - 1, flag, str, k + 1) ||
        dfs(matrix, rows, cols, i, j + 1, flag, str, k + 1)) {
        return true
    }
    flag[index] = false;
    return false
}