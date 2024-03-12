function selectionSort(arr){

    for(let i =0;i<arr.length-1;i++){
        let minIndex =i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex =j;
            }
        }
        if(minIndex!=i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

}
let arr=[45,3,2,6,4,1]
let result = selectionSort(arr);
console.log(arr);
