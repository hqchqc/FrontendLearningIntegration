new Promise((resolve,reject) => {
    console.log('1');
    resolve();
    console.log('2');
}).then(()=>{
    console.log('3');
})
setTimeout(() => {
    console.log(4);
}, 0);
console.log('5');