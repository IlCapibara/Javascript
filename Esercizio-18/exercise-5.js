function memoize(fn) {
  let cache = {};
  return x => {
    console.log(cache);
    if(x in cache){
      console.log(`${x} found in cache => ${cache[x]}`)      
      return cache[x];
    }
    else{
      let result= fn(x);
      cache[x]= result;
      return result;
    }
  }
  
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  
  return x * factorial(x - 1);
}
factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(10));
