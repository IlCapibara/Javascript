sum = (...num) => num.reduce((pValue, cValue) => pValue + cValue, 0);

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//Originariamente avevo messo la funzione nelle parentesi graffe, il console.log così però mi restituiva undefined
//dopo un po' a smanettare le ho tolte cercando di rendere il codice più pulito per vedere dove avevo sbaglaito
//ed ho scoperto che erano quelle il problema. Non riesco a capire perché...