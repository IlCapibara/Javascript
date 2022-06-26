function sum(...num) {
    let total = 0;
    for(i=0; i<arguments.length; i++){
        total += num[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));