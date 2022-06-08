const person = {
  get fName(){
    return this.firstName
  },
  set fName(fName){
    this.firstName = fName
  },
  get lName(){
    return this.lastName
  },
  set lName(lName){
    this.lastName = lName;
  },
  fullName : function(){
    return `${this.firstName} ${this.lastName}`;
  } 
};

let john = Object.create(person);
  john.firstName = 'John';
  john.lastName = 'Doe';

let simon = Object.create(person);
  simon.firstName = 'Simon';
  simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
