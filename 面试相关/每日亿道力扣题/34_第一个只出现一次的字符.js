/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数） 
 **/
function FirstNotRepeatingChar(str)
{
    let obj = {}, num = 1;
    for(let i=0; i<str.length; i++){
        if(obj[str[i]]){
            obj[str[i]]++;
        }else{
            obj[str[i]] = num;
        }
    }
    let item = '';
    for(let key in obj){
        // console.log(obj[key]);
        if(obj[key] === 1){
            item = key
            break;
        }
    }
    if(!item){
        return -1
    }else{
        for(let i =0; i<str.length; i++){
            if(str[i] === item){
                return i;
            }
        }
    }
    
    // foreach会遍历完数组不论break return

    // let res = [];
    
    // let arr = Object.keys(obj);
    // arr.forEach((item,index)=>{
    //     console.log(index + '-' + item + '-' + obj[item]);
    //     if(obj[item] == 1){
    //         res.push(index)
    //     }
    // })
    // console.log(res);
    // if(res){
    //     return res.shift()
    // }else{
    //     return -1
    // }

}

console.log(FirstNotRepeatingChar('google'));