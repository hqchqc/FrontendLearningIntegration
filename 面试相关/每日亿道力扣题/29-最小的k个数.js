/**
 * 输入n个整数，找出其中最小的K个数。
 * 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。
 */
function GetLeastNumbers_Solution(input, k) {
    let res = []
    input.sort((a,b)=>{
        if(a<b){
            return -1
        }else if(a == b){
            return 0
        }else{
            return 1
        }
    });
    let length = input.length;
    if(length < k){
        return []
    }else{
        for(let i=0; i<k; i++){
            res.push(input[i])
        }
    }
    
    console.log(res);
}

GetLeastNumbers_Solution([0,1,1,1,4,5,3,7,7,8,10,2,7,8,0,5,2,16,12,1,19,15,5,18,2,2,22,15,8,22,17,6,22,6,22,26,32,8,10,11,2,26,9,12,9,7,28,33,20,7,2,17,44,3,52,27,2,23,19,56,56,58,36,31,1,19,19,6,65,49,27,63,29,1,69,47,56,61,40,43,10,71,60,66,42,44,10,12,83,69,73,2,65,93,92,47,35,39,13,75],
    75)