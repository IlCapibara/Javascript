function sumUntil(maxValue) {
  let dividend = maxValue*(maxValue+1);
  let divisor = 2;
  return dividend / divisor; 
}

console.log(sumUntil(5));