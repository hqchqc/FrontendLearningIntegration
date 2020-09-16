/* 节流和防抖 */
// 防抖： 在事件被触发 n 秒后再执行回调 如果在 n 秒内事件又被触发，则重新计时；
function debounce(fn, wait) {
    let timer = null
    return function () {
        let context = this,
            args = arguments
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
}

// 节流： 规定一个单位时间， 在这个单位时间内， 只能由一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次生效
function throttle(fn, delay) {
    let preDate = Date.now()
    return function () {
        let context = this,
            args = arguments,
            nowDate = Date.now()
        if (nowDate - preDate >= delay) {
            preDate = Date.now()
            return fn.apply(context, args)
        }
    }
}