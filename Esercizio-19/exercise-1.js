const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Quando creiamo un oggetto tramite una variabile, questa non contiene l'oggetto effettivo ma solo un puntatore che fa riferimento all'allocazione di memoria 
// dov'è presente effettivamente l'oggetto. Quindi copiando in questa maniera l'oggetto avremo in realtà copiato il riferimento all'oggetto che punterebbe allo
// stesso identico indirizzo di memoria, ne consegue che cambiando una delle due variabili l'altra sarebbe affetta dal cambiamento allo stesso modo.

person2.firstName='Simon';

console.log(person1);
console.log(person2);

//Per evitare il problema basterà fare una shallow copy:
//  let person2 = {...person1};
