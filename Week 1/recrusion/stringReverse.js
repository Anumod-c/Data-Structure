//normal method
// function string(strReverse){
//     return   strReverse.split("").reverse().join("")
      
// }
// console.log(string('abcdefghijklmnopqrstuvwxyz'))


//recrusion method

function reverse(str){
    if(str === "" || str.length===0){
        return str
    }else{
        return reverse(str.slice(1)) +str[0]
    }
}
console.log(reverse('happy'))