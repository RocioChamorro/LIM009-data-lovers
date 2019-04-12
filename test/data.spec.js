global.window = global;
require('../src/data');
// require('./data.spec.js');

describe('Pokemon', () => {
  it('debería ser una objeto', () => {
    expect(typeof Pokemon).toBe('object');
  });
});
const input = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur', // ?????
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'spawn_time': '07:00',
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }],
  'next_evolution': [{
    'num': '003',
    'name': 'Venusaur'
  }],
},
{
  'id': 3,
  'num': '002',
  'name': 'abra',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'spawn_time': '07:00',
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }],
  'next_evolution': [{
    'num': '003',
    'name': 'Venusaur'
  }],
}
];

// const input2 = [{
//   "Nombre":"Bulbasaur",
//   "Imagen":"http://www.serebii.net/pokemongo/pokemon/001.png",
//   "Tipo":["Grass","Poison"],"Caramelos":25,"Huevo":"2 km"
// },{
//   "Nombre":"Ivysaur",
//   "Imagen":"http://www.serebii.net/pokemongo/pokemon/002.png",
//   "Tipo":["Grass","Poison"],"Caramelos":100,"Huevo":"Not in Eggs"},{"Nombre":"abra","Imagen":"http://www.serebii.net/pokemongo/pokemon/002.png","Tipo":["Poison"],"Caramelos":100,"Huevo":"Not in Eggs"}]

const output = [{
  'Nombre': 'Bulbasaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 25,
  'Huevo': '2 km'
}, {
  'Nombre': 'Ivysaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}, {
  'Nombre': 'abra',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}];

describe('obtenerCaracteris', () => {
  it('debería ser una función', () => {
    expect(typeof Pokemon.obtenerCaracteris).toBe('function');
  });
  it('debería retornar array', () => {
    expect(Array.isArray(Pokemon.obtenerCaracteris(input))).toBe(true);
  });
  it('debería retornar un array semejante al que entra', () => {
    expect(Pokemon.obtenerCaracteris(input)).toEqual(output);
  });
});
const output2 = [{
  'Nombre': 'Bulbasaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 25, 'Huevo': '2 km'
}, {
  'Nombre': 'Ivysaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}, {
  'Nombre': 'abra',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}];

describe('nombrePokeEvolucion', () => {
  it('debería ser una función', () => {
    expect(typeof Pokemon.nombrePokeEvolucion).toBe('function');
  });
  it('debería retornar array', () => {
    expect(Array.isArray(Pokemon.nombrePokeEvolucion(output))).toBe(true);
  });
  it('debería retornar un array de pokemones que evolucionan', () => {
    expect(Pokemon.nombrePokeEvolucion(input, 'candy_count')).toEqual(output2);
  });
});

const output3 = [{
  'Nombre': 'abra',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}, {
  'Nombre': 'Bulbasaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 25, 'Huevo': '2 km'
}, {
  'Nombre': 'Ivysaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}];
const input3Repet = [{
  'Nombre': 'abra',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}, {
  'Nombre': 'Bulbasaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 25, 'Huevo': '2 km'
}, {
  'Nombre': 'abra',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}];

const output3Repet = [{
  'Nombre': 'abra',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}, {
  'Nombre': 'abra',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}, {
  'Nombre': 'Bulbasaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 25,
  'Huevo': '2 km'}];

describe('ordenando', () => {
  it('debería ser una función', () => {
    expect(typeof Pokemon.ordenando).toBe('function');
  });
  it('debería retornar array ', () => {
    expect(Array.isArray(Pokemon.ordenando(Pokemon.obtenerCaracteris(input), 'ASCENDENTE'))).toBe(true);
  });
  it('debería retornar array ordenado de forma ascendente', () => {
    expect(Pokemon.ordenando(Pokemon.obtenerCaracteris(input), 'ASCENDENTE')).toEqual(output3);
  });
  it('debería retornar array ordenado de forma descendente por nombre', () => {
    const namesInDescendentOrder = Pokemon.ordenando(Pokemon.obtenerCaracteris(input), 'DESCENDENTE').map(pokemon => pokemon.Nombre);
    expect(namesInDescendentOrder).toEqual(['Ivysaur', 'Bulbasaur', 'abra']);
  });
  it('debería retornar array ordenado de forma ascendente con data repetitiva', () => {
    expect(Pokemon.ordenando(input3Repet, 'ASCENDENTE')).toEqual(output3Repet);
  });
  it('debería retornar array ordenado de forma descendente con data repetitiva', () => {
    expect(Pokemon.ordenando(input3Repet, 'DESCENDENTE').map(pokemon => pokemon.Nombre)).toEqual(['Bulbasaur', 'abra', 'abra']);
  });
});

const output4 = [{
  'Nombre': 'Bulbasaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 25,
  'Huevo': '2 km'
}, {
  'Nombre': 'Ivysaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 100,
  'Huevo': 'Not in Eggs'
}];

describe('Pokemon.filtrarTipos', () => {
  it('debería ser una función', () => {
    expect(typeof Pokemon.filtrarTipos).toBe('function');
  });
  it('debería retornar array', () => {
    expect(Array.isArray(Pokemon.filtrarTipos(input, 'type', 'Grass'))).toBe(true);
  });
  it('debería retornar los pokemones filtrado por un tipo', () => {
    const filtered = Pokemon.filtrarTipos(input, 'type', 'Grass');
    expect(filtered).toEqual(output4);
  });
});

const output5 = [{
  'Nombre': 'Bulbasaur',
  'Imagen': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'Tipo': ['Grass', 'Poison'],
  'Caramelos': 25, 'Huevo': '2 km'
}];

describe('filtrarTodos', () => {
  it('debería ser una función', () => {
    expect(typeof Pokemon.filtrarTodos).toBe('function');
  });
  it('debería retornar array', () => {
    expect(Array.isArray(Pokemon.filtrarTodos(input, 'name', 'Bulbasaur'))).toBe(true);
  });
  it('debería retornar array de los tipos de pokemones', () => {
    expect(Pokemon.filtrarTodos(input, 'name', 'Bulbasaur')).toEqual(output5);
  });
});

const output6 = ['Grass', 'Poison'];

describe('listaTiposPoke', () => {
  it('debería ser una función', () => {
    expect(typeof Pokemon.listaTiposPoke).toBe('function');
  });
  it('debería retornar array', () => {
    expect(Array.isArray(Pokemon.listaTiposPoke(input))).toBe(true);
  });
  it('debería retornar array de los tipos de pokemones', () => {
    expect(Pokemon.listaTiposPoke(input)).toEqual(output6);
  });
});

const output7 = 20;

describe('operacion', () => {
  it('debería ser una función', () => {
    expect(typeof Pokemon.operacion).toBe('function');
  });
  it('debería retornar 20', () => {
    expect(Pokemon.operacion(input, 5, 'Bulbasaur')).toEqual(output7);
  });
  it('debería retornar tipo number', () => {
    expect(typeof Pokemon.operacion(input, 5, 'Bulbasaur')).toBe('number');
  });
});

const output8 = 'Ivysaur';

describe('NameEvolucion', () => {
  it('debería ser una función', () => {
    expect(typeof Pokemon.NameEvolucion).toBe('function');
  });
  it('debería retornar Ivysaur', () => {
    expect(Pokemon.NameEvolucion(input, 'Bulbasaur')).toEqual(output8);
  });
  it('debería retornar tipo string', () => {
    expect(typeof Pokemon.NameEvolucion(input, 'Bulbasaur')).toBe('string');
  });
});