/**
 * 请实现一个函数用来找出字符流中第一个只出现一次的字符。
 * 例如，当从字符流中只读出前两个字符"go"时，
 * 第一个只出现一次的字符是"g"。当
 * 从该字符流中读出前六个字符“google"时，
 * 第一个只出现一次的字符是"l"。
 */

//Init module if you need
let map;

function Init() {
    map = {};
}
//Insert one char from stringstream
function Insert(ch) {
    map[ch] = map[ch] ? ++map[ch] : 1;
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
    for (let key in map) {
        if (map[key] === 1) {
            return key
        }
    }
    return '#'
}


Init();
Insert('g')
Insert('o')
Insert('o')
Insert('l')
console.log(map);