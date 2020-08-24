function shallowCopy(object){
    if(!object || typeof object !== 'object') return

    let newObject = Array.isArray(object) ? [] : {};

    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObject[key] = object[key];
        }
    }

    return newObject
}

function deepCopy(object){
    if(!object || typeof object !== 'object') return

    let newObject = Array.isArray(object) ? [] : {}

    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObject[key] = typeof object[key] === 'object' ? deepCopy(object[key]) : object[key]
        }
    }

    return newObject
}