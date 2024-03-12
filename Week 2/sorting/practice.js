// function Bubblesort(array){
//     let ifSwapped;
//     do{
//         ifSwapped= false
//         for(let i=0;i<array.length-1;i++){
//             if(array[i]>array[i+1]){
//                 let temp = array[i];
//                 array[i]=array[i+1];
//                 array[i+1]=temp;
//                 ifSwapped=true;
//             }
//         }
//     }
// while(ifSwapped)
// return array
// }
// let array=[2,4,5,2,5,22,1]
// console.log(Bubblesort(array))




// function insertionSort(array){
//     for(let i=1;i<array.length;i++){
//         let numberToInsert =array[i];
//         let j= i-1;
//         while(j>=0 && array[j]>numberToInsert){
//             array[j+1]=array[j]
//             j=j-1;
//         }
//         array[j+1]=numberToInsert
//     }
//     return array
// }
// let array=[2,4,5,2,5,22,1]
// console.log(insertionSort(array))


//quick sort

// function quickSort(array){
//     if(array.length<2){
//         return array
//     }
//     let left=[];
//     let right=[];
//     let pivot =array[array.length-1]
//     for(let i=0;i<array.length-1;i++){
//         if(array[i]<pivot){
//             left.push(array[i])
//         }
//         else{
//             right.push(array[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]


// }
// let array=[2,4,5,2,5,22,1]
// console.log(quickSort(array))


//Merge Sort

// function mergeSort(array){
//     if(array.length<2){
//         return array
//     }
//     let middle=Math.floor(array.length/2)
//     let left = array.slice(0,middle);
//     let right = array.slice(middle)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let sortedArray=[];
//     while(left.length &&  right.length){
//         if(left[0]<=right[0]){
//             sortedArray.push(left.shift())
//         }
//         else{
//             sortedArray.push(right.shift())
//         }
//     }
//     return [...sortedArray,...left,...right]
// }
// let array=[-112,4,5,2,5,22,1]
// console.log(mergeSort(array))

//selection Sort

function selectionSort(arr){
for(let i=0;i<arr.length-1;i++){
    let minIndex=i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex]){
            let temp =arr[minIndex];
            arr[minIndex] = arr[j];
            arr[j]=temp;
        }
    }
}
return arr
}
let arr=[112,4,-5,2,5,22,1]
console.log(selectionSort(arr))
