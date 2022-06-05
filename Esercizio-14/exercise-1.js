function greet(greeting) {
  function innerGreet(name){
    return `${greeting} ${name}`
  }
  return innerGreet;
}

let greetWithHello = greet('Hello');
let greetWithBye = greet('Bye');
let greetWithHi = greet('Hi');

let greetPaulWithHello = greetWithHello('Paul');
let greetPaulWithHi = greetWithHi('Paul');
let greetJohnWithBye = greetWithBye('John');
let greetSimonWithHello = greetWithHello('Simon');

console.log(greetPaulWithHello);
console.log(greetPaulWithHi);
console.log(greetJohnWithBye);
console.log(greetSimonWithHello);