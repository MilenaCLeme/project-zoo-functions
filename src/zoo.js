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
  const verificarAge = localizarAnimal.residents.every((resident) => resident.age >= age);
  return verificarAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
