/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 */
var spiralOrder = function (matrix) {
    if(matrix.length == 0) return []
    let lx = 0,
        ly = 0;
    let rx = matrix.length - 1,
        ry = matrix[0].length - 1;
    let result = [];
    while (lx <= rx && ly <= ry) {
        turn(lx++, ly++, rx--, ry--, result, matrix);
    }
    console.log(result);
}

function turn(lx, ly, rx, ry, result, matrix) {
    for (let i = lx; i <= ry; i++) {
        result.push(matrix[lx][i]);
    }
    for (let i = lx + 1; i <= rx; i++) {
        result.push(matrix[i][ry])
    }
    let h = rx - lx + 1;
    if (h > 1) {
        for (let i = ry - 1; i >= lx; i--) {
            result.push(matrix[rx][i])
        }
    }
    let w = ry - ly + 1;
    if (w > 1) {
        for (let i = rx - 1; i >= lx + 1; i--) {
            result.push(matrix[i][ly])
        }
    }
}