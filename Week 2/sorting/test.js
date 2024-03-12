// ===============================        BUBBLE SORT     =================================

// function bubbleSort(arr){
//     let ifSwapped;
//  do{
//     for(let i =0;i<arr.length-1;i++){
//         ifSwapped=false
//         if(arr[i]>arr[i+1]){
//             let temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1]= temp;
//             ifSwapped =true;
//         }
//     }
// }
//     while(ifSwapped);
// }
// let arr = [4.5,2,24,6.2]
// bubbleSort(arr);
// console.log(arr);




//======================================= INSERTION SORT  ==================================

// function insertinSort(arr){

// for(let i=1;i<arr.length;i++){
//     let current = arr[i];
//     let j=i-1;
//     while(j>=0 && arr[j]>current){
//         arr[j+1]=arr[j];
//         j=j-1;
//     }
//     arr[j+1] =current
// }
// }
// let arr  = [2,3,118,4,3,2];
// insertinSort(arr);
// console.log("Bubblesort",arr)

//====================             QUICK SORT         ======================================

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1];
//     let left =[];
//     let right = [];
//     for(let  i = 0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
    
// }
// let arr =[3,2,5,6,2,1];
// console.log(quickSort(arr));


//==================================         SELECTION SORT       ==================
// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let smallestIndex = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]< arr[smallestIndex]){
//                 smallestIndex=j;
//             }
//         }
//         if(arr[i]!==arr[smallestIndex]){
//             let temp = arr[i];
//             arr[i] = arr[smallestIndex];
//             arr[smallestIndex] = temp
//         }
//     } 
//     return arr
// }
// let arr = [5,2,2,5,6,7,8,9,5,3,2];
// let result = selectionSort(arr)
// console.log(result);

//=======================================      MERGE SORT    ==============================
function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return merge (mergeSort(left),mergeSort(right))
}
function merge(left ,right){
    let sortedArray = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArray.push(left.shift())
        }
        else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}

let arr=[3,54,7,31];
console.log(mergeSort(arr))