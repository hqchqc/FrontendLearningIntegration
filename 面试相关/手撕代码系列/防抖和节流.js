/* 节流和防抖 */
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