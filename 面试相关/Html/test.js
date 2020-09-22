let xml = new XMLHttpRequest();
xml.open('get','localhost:8080',true);
xml.onreadystatechange = function(){
    if(this.readyState !== 4) return
    if(this.status === 200){
        handle(this.response);
    }else{
        console.log(this.statusText);
    }
}
xml.onerror = function(){
    console.log(this.statusText);
}
xml.setRequestHeader('Accept','application/json')
xml.send(null)

function getJSON(url){
    let promise = new Promise((res,rej)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('get',URL,true)
        xhr.onreadystatechange = function(){
            if(this.readyState !== 4) return;
            if(this.status === 200){
                res(this.response)
            }else{
                rej(this.statusText);
            }
        };
        xhr.onerror = function(){
            rej(this.statusText);
        }
        xhr.responseType = 'json';
        xhr.setRequestHeader("Accept",'application/json');
        xhr.send()
    })
    return promise
}

function shallowCopy(object){
    if(!object || typeof object !== 'object') return;

    let newObject = Array.isArray(object) ? [] : {};

    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObject[key] = object[key];
        }
    }

    return newObject;
}

function deepCopy(object){
    if(!object || typeof object !== 'object') return;

    let newObject = Array.isArray(object) ? [] : {};

    for(let key in object){
        if(Object.hasOwnProperty(key)){
            newObject[key] = 
            typeof object[key] === 'object' ? 
            deepCopy(object[key]) : object[key];
        }
    }

    return newObject;
}
