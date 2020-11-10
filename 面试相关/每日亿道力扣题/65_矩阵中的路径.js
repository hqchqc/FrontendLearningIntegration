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

function hasPath(matrix, rows, cols, path)
{
    let w = rows, h = cols;
    let len = path.length;
    let mat = matrix;
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(dfs(i,j,0,path)){
                return true
            }
        }
    }
    return false;
}

function dfs(i,j,pos,path){
    let mat = [],
        h = 0,
        w = 0,
        len = 0,
        dir = [-1,0,1,0,-1]
    // 1. 检查下标是否满足条件
    if(i < 0 || i >= h || j < 0 || j >= w){
        return false
    }
    // 2. 检查是否被访问过，或者是否满足当前匹配条件
    let ch = mat[i * w + j];
    if(ch === '#' || ch !== path[pos]){
        return false;
    }
    if(pos + 1 === len){
        return true;
    }
    // 3. 检查是否满足返回结果条件
    mat[i * w + j] = '#';
    for(let k = 0; k < 4; k++){
        if(dfs(i + dir[k], j + dir[k+1], pos + 1, path)){
            return true
        }
    }
    // 4. 都没有返回 说明应该进行下一步递归
    mat[i * w + j] = ch;
    return false
}