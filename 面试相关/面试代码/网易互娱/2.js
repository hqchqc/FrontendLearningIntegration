/**
 * 游戏中掉落了n(n>0)种道具 这 n 种道具的杀伤力分别为p1,p2,p3
 * 至少需要多少个道具才能拼出杀伤力为m的组合 如果组合不出来返回-1
 */
function solution( harmList ,  totalHarm ) {
    let res = 0;
    for(let i=0; i<harmList.length; i++){
        if(harmList[i] > totalHarm){
            res = -1
        }else{
            
        }
    }
    return res
}

console.log(solution([2,3],1));
