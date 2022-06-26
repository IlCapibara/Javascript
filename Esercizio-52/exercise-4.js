const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(
  Object.entries(person).filter(([key, value]) => typeof value == "number")
);

console.log(json); // Should return: { id: 1, age: 25 }