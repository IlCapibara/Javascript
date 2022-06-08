const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keyValue = (obj) => {
 Object.keys(obj)
} 

keyValue(person)
// Print values of person using Object.keys