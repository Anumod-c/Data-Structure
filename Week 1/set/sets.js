const set  = new Set([1,2,3,43,]);
for (item of set){
    set.add(100)
    const b = set.has(43);
    console.log(item);

    console.log(set.size," :size");
    set.delete(2);
    set.delete(100)
    console.log(set.size," :size");
    set.clear()
    for(items of set){
        console.log(items);
    }
}