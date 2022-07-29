const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
fetchPersonById = (id) =>{
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      if(person){
        return resolve(person);
      }
      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  })
};

fetchJobById = (id) =>{
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);
      if(job){
        return resolve(job);
      }
      return reject(`Person with id: ${id} doesn't exist`);
    }, 500);
  })
};
promise2 = fetchPersonById(1);
promise1 = fetchJobById(1);
Promise.any([promise1, promise2])
  .then((values) => {
    console.log(values);
  });
