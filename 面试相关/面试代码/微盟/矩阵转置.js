var arr=[[2,4,6,8],[8,9,0,-1],[9,6,2,1]];

var arr2 = [];

for(var i=0;i<arr[0].length;i++){
    arr2[i]=[];
}

for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        arr2[j][i]=arr[i][j];
    }
}


console.log(arr2);