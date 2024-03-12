//factorial
// function factorial(num){
//     if(num <1){
//         return -1
//     }
//     if(num===1){
//         return 1
//     }
//     else{

//         return  num *  factorial(num-1)
//     }
    

// }
// console.log(factorial(5))



// fibonacci 

// function fibonnaci(num){
// if(num < 2){
//     return num
// }
// else{
//     return fibonnaci(num-1) + fibonnaci(num-2)
// }
// }
// console.log(fibonnaci(5))


//reverse string
// function reverse(str){
//     if(str.length===0 || str===" "){
//         return str
//     }
//     else{
//         return reverse( str.slice(1)) +str[0] 

//     }
// }
// console.log(reverse("apple"))


//is palindrme

// function isPalindrome(str){
//     if(str.length===1){
//         return true
//     }
//     if(str[0]===str.slice(-1)){
//         return isPalindrome(str.slice(1,-1))
//     }
// return false
// }
// console.log(isPalindrome("malayalam"))


//sumofn

// function sumOfN(num){
//     if(num==1){
//         return 1
//     }
//     else{
//         return num + sumOfN(num-1)
//     }

// }
// console.log(sumOfN(10))

//array sum
// function arraySum(arr){
//     if(arr.length== 0){
//         return 0
//     }
//     else{
//         return arr[0] + arraySum(arr.slice(1))
//     }

// }
// console.log(arraySum([2,3]))

//array reverse

function arrayREverse(arr){
if(arr.length==0){
    return arr
}
else{
    return [arr[arr.length-1]].concat(arrayREverse(arr.slice(0,arr.length-1)))
}
}
console.log(arrayREverse([2,3,4,5,6]))