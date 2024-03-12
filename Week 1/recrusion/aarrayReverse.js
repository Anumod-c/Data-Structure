function reverse(arr){
if(arr.length===0){
    return  arr
}
return [arr[arr.length-1]].concat(reverse(arr.slice(0,arr.length-1)))
}
console.log(reverse([1,2,3,4,5,6,7,8,9]))