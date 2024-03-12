function sumOfNumbersUpToN(input){
    if(input ===1){
        return input
    }
    else{
        return input + sumOfNumbersUpToN(input-1);
    }
}
console.log(sumOfNumbersUpToN(5))