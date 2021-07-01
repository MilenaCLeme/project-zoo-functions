const { employees } = require('./data');
const data = require('./data');

function localizarEspecie(ids) {
  const animal = data.species.filter((especie, index) => {
    let id;
    let especies;
    if (ids.length > index) {
      id = ids[index];
    }
    if (especie.id === id || id !== undefined) {
      especies += especie;
    }
    return especies;
  });
  return animal;
}

function getSpeciesByIds(...ids) {
  const arrayDeString = [...ids];
  if (arrayDeString.length === 0) {
    return [];
  }
  return localizarEspecie(arrayDeString);
}

function getAnimalsOlderThan(animal, age) {
  const localizarAnimal = data.species.find((especie) => especie.name === animal);
  return localizarAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const localizarFuncionario = data.employees.find((employe) => {
    let employee;
    if (employe.firstName === employeeName || employe.lastName === employeeName) {
      employee = employees;
    }
    return employee;
  });
  return localizarFuncionario;
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  // seu código aqui
  return {
    firstName,
    id,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const localizarId = data.employees.find((employe) => employe.id === id);
  return localizarId.managers.every((ele) => ele === '9e7d4524-363c-416a-8759-8aa7e50c0992');
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const objNovo = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  console.log(objNovo);
  data.employees.push(objNovo);
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
