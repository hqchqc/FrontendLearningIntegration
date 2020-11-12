/**
 * 地上有一个m行和n列的方格。
 * 一个机器人从坐标0,0的格子开始移动，
 * 每一次只能向左，右，上，下四个方向移动一格，
 * 但是不能进入行坐标和列坐标的数位之和大于k的格子。
 *  例如，当k为18时，机器人能够进入方格（35,37），
 * 因为3+5+3+7 = 18。但是，它不能进入方格（35,38），
 * 因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
 */
function movingCount(threshold, rows, cols) {
    let visit = [];
    for (let i = 0; i < rows; i++) {
        visit.push([]);
        for (let j = 0; j < cols; j++) {
            visit[i][j] = false;
        }
    }
    return dfs(visit, threshold, rows, cols, 0, 0);
}

function dfs(visit, threshold, rows, cols, i, j) {
    // 1. 边界值
    if (i < 0 || j < 0 || i >= rows || j >= cols || visit[i][j]) {
        return 0;
    }
    // 2. 计算和
    let str = i + "" + j;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    // 3. 判断和
    if (sum > threshold) {
        return 0;
    }
    // 4. 走过的标为 true 哦
    visit[i][j] = true;
    // 5. 回溯 计算
    return 1 + dfs(visit, threshold, rows, cols, i - 1, j) + dfs(visit, threshold, rows, cols, i + 1, j) +
        dfs(visit, threshold, rows, cols, i, j + 1) + dfs(visit, threshold, rows, cols, i, j - 1)
}