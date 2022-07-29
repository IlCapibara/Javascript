class Person {
  constructor(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }
  get fullName(){
    return `${this._firstName} ${this._lastName}`
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(fname) {
    this._firstName = fname;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lname) {
   this._lastName = lname;
  }
  get age() {
    return this._age;
  }
  set age(value){
    this._age = value;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);