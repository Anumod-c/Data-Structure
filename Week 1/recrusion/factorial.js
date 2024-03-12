// factorial using normal function
// function factorial(n){
//     let result = 1;
    
//     for(let i=2; i <= n ; i++){
//        result = result* i;
//     }
// return result
// }
// console.log( factorial(5))

//using recrusion

function factorial(n){
    if(n<1){
        return 1
    }
    return n* factorial(n-1)
}
console.log( factorial(5))
