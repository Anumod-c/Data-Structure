
let result= 0
function getsum(arr){
for(let i = 0 ; i< arr.length ; i++){
    result+=arr[i]
}
return result
}
let array = [1,3,4,5,6,7,76]
console.log(getsum(array))