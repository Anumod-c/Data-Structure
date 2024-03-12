function insrtionSort(arr){
    for(let i =1;i<arr.length;i++){
        let numberToInsert = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1] = numberToInsert
    }
}

let arr= [-12,1,4,-2,-33]
insrtionSort(arr)
console.log(arr);