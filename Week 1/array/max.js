//max
function maxElement(number){
    let  max = number[0] 
    for(let i =1 ; i<number.length;i++){
        if(number[i]>max){
            max =number[i]
        }
    }

    return max

}

let result = [1,22,4,5,6,7]
console.log(maxElement(result))


