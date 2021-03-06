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

function animaisCategorizados() {
  const animaisCategorizadosPorRegião = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach(({name, location}) => {
    animaisCategorizadosPorRegião[location].push(name);
  });
  return animaisCategorizadosPorRegião;
}

function incluirNome() {
  const animaisCategorizadosPorRegião = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach(({name, location, residents}) => {
    animaisCategorizadosPorRegião[location].push({[name]: []});
    residents.map((e) => {
      animaisCategorizadosPorRegião[location][animaisCategorizadosPorRegião[location].length - 1][name].push(e.name);
    });
  });
  return animaisCategorizadosPorRegião;
}

function sortearNomesIncluidos() {
  const animaisIncluidos = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach(({name, location, residents}) => {
    animaisIncluidos[location].push({[name]: []});
    const nomes = residents.map((e) => e.name).sort();
    animaisIncluidos[location][animaisIncluidos[location].length - 1][name] = [...nomes];
  });
  return animaisIncluidos;
}

function separarPorSexo(sexo) {
  const animaisIncluidos = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach(({name, location, residents}) => {
    animaisIncluidos[location].push({[name]: []});
    const nomes = residents.filter((e) => e.sex === sexo).map((e) => e.name);
    animaisIncluidos[location][animaisIncluidos[location].length - 1][name] = [...nomes];
  });
  return animaisIncluidos;
}

function sorteouNomesPorSexo(sexo) {
  const animaisIncluidos = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach(({name, location, residents}) => {
    animaisIncluidos[location].push({[name]: []});
    const nomes = residents.filter((e) => e.sex === sexo).map((e) => e.name).sort();
    animaisIncluidos[location][animaisIncluidos[location].length - 1][name] = [...nomes];
  });
  return animaisIncluidos;
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return animaisCategorizados();
  }
  let entrou = '';
  let sexo = ''
  let resultado = {};
  const valor = Object.entries(options).length
  Object.entries(options).forEach((e) => {
    if (e[0] === 'includeNames' || valor === 1) {
      resultado = incluirNome();
      entrou += 'includeNames';
    } else if (e[0] === 'sex' || entrou === 'incluideNames' ) {
      entrou += 'sex';
      sexo = e[1];
      resultado = separarPorSexo(e[1]);
    } else if (e[0] === 'sorted' && entrou === 'includeNames') {
      resultado = sortearNomesIncluidos();
    } else if (e[0] === 'sorted' && entrou === 'includeNamessex') {
      resultado = sorteouNomesPorSexo(sexo);
    }
  });
  return resultado;
}

console.log(getAnimalMap({includeNames: true, sex: 'female', sorted: true}));

function horaCerta() {
  const datas = data.hours;
  const horarioTransformado = {
    Tuesday: `Open from ${datas.Tuesday.open}am until ${datas.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${datas.Wednesday.open}am until ${datas.Wednesday.close - 12}pm`,
    Thursday: `Open from ${datas.Thursday.open}am until ${datas.Thursday.close - 12}pm`,
    Friday: `Open from ${datas.Friday.open}am until ${datas.Friday.close - 12}pm`,
    Saturday: `Open from ${datas.Saturday.open}am until ${datas.Saturday.close - 12}pm`,
    Sunday: `Open from ${datas.Sunday.open}am until ${datas.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  return horarioTransformado;
}

function getSchedule(dayName) {
  const horarios = horaCerta();
  const hora = horarios[dayName];
  if (dayName === undefined) {
    return horarios;
  }
  const horario = {};
  horario[dayName] = hora;
  return horario;
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
