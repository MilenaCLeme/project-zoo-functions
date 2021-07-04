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

function countAnimals(species1) {
  const contador = data.species.reduce((acc, especie) => {
    if (species1 === undefined) {
      acc[especie.name] = especie.residents.length;
    } else if (species1 === especie.name) {
      return especie.residents.length;
    }
    return acc;
  }, {});
  return contador;
}

function calcularEntradas(entrada) {
  let soma = 0;
  Object.keys(entrada).forEach((elemento) => {
    console.log(elemento);
    if (elemento === 'Adult') {
      soma += data.prices.Adult * entrada.Adult;
    } else if (elemento === 'Child') {
      soma += data.prices.Child * entrada.Child;
    } else if (elemento === 'Senior') {
      soma += data.prices.Senior * entrada.Senior;
    }
  });
  return soma;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return calcularEntradas(entrants);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {

}

function roundToTwo(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
  //https://qastack.com.br/programming/11832914/round-to-at-most-2-decimal-places-only-if-necessary
}

function increasePrices(percentage) {
  const porcento = percentage / 100 + 1.00;
  data.prices.Adult = roundToTwo(data.prices.Adult * porcento);
  data.prices.Child = roundToTwo(data.prices.Child * porcento);
  data.prices.Senior = roundToTwo(data.prices.Senior * porcento);
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
