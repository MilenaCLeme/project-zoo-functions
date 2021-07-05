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
  const idDofuncionario = data.employees.find((empregado) => empregado.id === id);
  const idDoBicho = idDofuncionario.responsibleFor[0];
  const localizarId = data.species.filter((valor) => valor.id === idDoBicho);
  const refazer = localizarId[0].residents.map((valor) => valor.age);
  const animais = localizarId[0].residents.reduce((acc, bicho) => {
    if (bicho.age === Math.max(...refazer)) {
      acc.push(bicho.name);
      acc.push(bicho.sex);
      acc.push(bicho.age);
    }
    return acc;
  }, []);
  return animais;
}

function roundToTwo(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function increasePrices(percentage) {
  const porcento = percentage / 100 + 1.00;
  data.prices.Adult = roundToTwo(data.prices.Adult * porcento);
  data.prices.Child = roundToTwo(data.prices.Child * porcento);
  data.prices.Senior = roundToTwo(data.prices.Senior * porcento);
}

function seforundefined(semParametros) {
  const funcionarios = data.employees.reduce((acc, funcionario) => {
    if (semParametros === undefined) {
      const animal = funcionario.responsibleFor.map((valor) => {
        const animais = data.species.find((anima) => valor === anima.id);
        return animais.name;
      });
      acc[`${funcionario.firstName} ${funcionario.lastName}`] = animal;
    }
    return acc;
  }, {});
  return funcionarios;
}

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) {
    return seforundefined(idOrName);
  }
  const funcionario = data.employees.reduce((acc, emplo) => {
    if (idOrName === emplo.id || idOrName === emplo.firstName || idOrName === emplo.lastName) {
      const bichinho = emplo.responsibleFor.map((valor) => {
        const animais = data.species.find((anima) => valor === anima.id);
        return animais.name;
      });
      acc[`${emplo.firstName} ${emplo.lastName}`] = bichinho;
    }
    return acc;
  }, {});
  return funcionario;
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
