const map = new Map([["names","anumod"],["age",23]]);
//fort creating a new key value pair we can use map method 
map.set('d')
//to check whether it exist or not can use has method
console.log(map.has('d','male'),"yes");
map.delete('names')
for( [key,value] of map){
    console.log(`${key}, ${value}`);
}
console.log(map.size);
// to clear all teh keys and value we can use map.clear
