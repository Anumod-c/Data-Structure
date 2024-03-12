function arrayReverse(array){
    let start = 0
    let end = array.length-1
    while(start <end){
    let temp = array[start]
     arr[start] = array[end]
     array[end] =temp
     start++
     end--
    }
     return array
}

let array = [1,2,3,4,5]
console.log(arrayReverse(array))


