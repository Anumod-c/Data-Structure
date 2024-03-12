//Normal method using function


// function fibonacci(n){
//     const fib = [0,1];
//     for (let i = 2; i < n; i++) {
//          fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib
// }
// console.log(fibonacci(3));
// console.log(fibonacci(13));



//Using Recrusion
 function fibonacci(n){
    if(n<2){
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
    
 }
 console.log(fibonacci(7))
