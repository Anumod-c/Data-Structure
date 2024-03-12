// function prime(n){
//  if(n<2){
//     return false
// }
// for(let i=2;i<n ; i++){

//     if(n% i === 0){
//         return false
//     }
// }
// return true
// }
// console.log(prime(7))
// console.log(prime(27))

// more optimal solution 

function optmalPrime(num){
 if(num <2){
    return false
}

for(let i =2 ;i<= Math.sqrt(num); i++){
    if(num % i === 0){
        return false
    }
}
return true
}

console.log(optmalPrime(7))
console.log(optmalPrime(13))

//ussing recrusion

function isPrime(num){
    if(num<2){
        return false
    }
    

}
console.log(isPrime(10))