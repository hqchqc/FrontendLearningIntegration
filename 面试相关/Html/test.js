let str = '1,2,3';
str = str.split(',');

let memo = {},number = 1;
for(let i=0; i<str.length; i++){
    if(!memo[str[i]]){
        memo[str[i]] = {};
        memo[str[i]].number = number;
        memo[str[i]].index = [];
        memo[str[i]].index.push(i);
    }else{
        memo[str[i]].number++;
        memo[str[i]].index.push(i)
    }
}
let max = 0,result = {}
for(let key in memo){
    if(memo[key].number > max){
        max = memo[key].number;
    }
}
for(let key in memo){
    if(memo[key].number === max){
        result[key] = memo[key];
    }
}

for(key in result){
    for(let i=0; i<result[key].index.length; i++){
        str[result[key].index[i]] = null;    
    }
}


str = str.toString()
let temp ='';
for(let i=0; i<str.length; i++){
    if(str[i] !== ','){
        temp += str[i]
    }
}

console.log(temp.split(''));
