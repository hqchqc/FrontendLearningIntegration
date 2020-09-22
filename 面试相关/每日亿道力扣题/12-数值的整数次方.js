/**
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
    保证base和exponent不同时为0
 */

function Power(base, exponent)
{
    if(exponent < 0){
        base = 1 / base;
        exponent = Math.abs(exponent);
    }
    let temp = base,
        ret = 1.0
    while(exponent){
        if(exponent % 2 !== 0){
            ret = ret * temp;
        }
        temp = temp * temp;
        exponent >>= 1;
    }
    return ret;
}