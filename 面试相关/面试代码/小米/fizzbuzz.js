function Solution(num) {
    if(num % 7 === 0 && num % 9 === 0){
        return 'fizzbuzz'
    }else if(num % 7 === 0){
        return 'fizz'
    }else if(num % 9 === 0){
        return 'buzz'
    }else if(Number.isNaN(num) || num){
        return false
    }else{
        return num
    }
}