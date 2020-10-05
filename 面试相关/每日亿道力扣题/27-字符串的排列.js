/***
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则按字典序打印出由字符a,b,c
 * 所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    let res = new Set();
    let visit = {};

    function dfs(path) {
        if (path.length === s.length) return res.add(path);
        for (let i = 0; i < s.length; i++) {
            if (visit[i]) continue
            visit[i] = true;
            dfs(path + s[i])
            visit[i] = false;
        }
    }
    dfs('');
    return [...res]
};

console.log(Permutation(''));