/**
 * 一个整型数组里除了两个数字之外，其他的数字都出现了两次。
 * 请写程序找出这两个只出现一次的数字。
 */

function FindNumsAppearOnce(array) {
    if (!Array.isArray(array) || array.length <= 0) return

    let map = {},
        count = 1,
        res = [];

    array.forEach(item => {
        if (map[item]) {
            map[item]++
        } else {
            map[item] = count
        }
    })

    for (let key in map) {
        if (map[key] === 1) {
            res.push(key)
        }
    }
    console.log(res);
}

FindNumsAppearOnce([1, 2, 2, 3, 3, 4, 2])