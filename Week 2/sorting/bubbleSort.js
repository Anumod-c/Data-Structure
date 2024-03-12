function bubbleSort(arr) {
    let ifSwapped
    do {
        ifSwapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                ifSwapped = true
            }
        }
    }
    while (ifSwapped)
}
let arr = [2, 8, -2, -6, 20];
console.log("Before  sort", arr);
bubbleSort(arr);
console.log("Aftter sort", arr);
