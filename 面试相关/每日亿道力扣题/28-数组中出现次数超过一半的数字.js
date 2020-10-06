/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
 * 如果不存在则输出0。
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let length = nums.length / 2;
    let map = {};
    for(let i=0; i<nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++;
        }else{
            map[nums[i]] = 1;
        }
    }
    let res;
    for(let key in map){
        if(map[key] >= length){
            res = key;
            return res;
        }
    }
    // console.log(map);
    return 0;
};

console.log(majorityElement([1,2,3,2,2,2,5,4,2]));