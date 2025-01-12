// function BinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)

// }

// function search(arr,target,leftIndex,rigthIndex){
//     if(leftIndex>rigthIndex){
//         return -1
//     }
//     let middleIdex = Math.floor((leftIndex + rigthIndex)/2)
//     if(target=== arr[middleIdex]){
//         return middleIdex
//     }
//     if(target<arr[middleIdex]){
//         return search(arr,target,leftIndex,middleIdex -1)
//     }
//     else{
//         return search(arr,target,middleIdex+1,rigthIndex)
//     }
// }
// console.log(BinarySearch([21,23,34,56,66,77],23))


function BinarySearch(arr,target){
    return search(arr, target,0,arr.length-1)
}
function search(arr,target,left,right){
    let middle= Math.floor((left+right/2));
    if(left>right){
        return -1
    }
    if(target===arr[middle]){
        return middle
    }
    if(target<arr[middle]){
        return search(arr,target,left,middle-1)
    }else{
        return search(arr,target,middle+1,right)
    }
}
console.log(BinarySearch([1,2,3,4,5],3))