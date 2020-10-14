function double(value,callback){
    setTimeout(() => {
        callback(value * 2)
    }, 1000);
}

double(3, function(x){
    console.log(`i was given: ${x}`);
})

function double(value,success,failure){
    setTimeout(() => {
        try{
            if(typeof value !== 'number'){
                throw 'Must provide number as first arguments';
            }
            success(2 * value);
        } catch(e){
            failure(e);
        }
    }, 1000);
}

const successCallback = x => console.log(`Success: ${x}`);
const failureCallback = e => console.log(`Failure: ${e}`);

double(3,successCallback,failureCallback);
double('b',successCallback,failureCallback);