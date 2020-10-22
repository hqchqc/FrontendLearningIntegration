function StrToInt(str) {
    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const arr = str.split('')
    if ((!['+', '-'].includes(arr[0])) && !nums.includes(arr[0])) return 0
    for (let i = 1; i < arr.length; i++) {
        if (!nums.includes(arr[i])) return 0
    }
    const n1 = Number(str.slice(1))
    if (n1 === 0) return 0
    return arr[0] === '+' ? Number(str.slice(1)) : arr[0] + Number(str.slice(1))
}