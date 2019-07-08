/* Manejo del DOM */

/* Pintar los nombres de los pokemones*/

const dataPokemon = POKEMON.pokemon; // Array de Objetos
const selectNamesElement = document.getElementById('lista-nombres');
const selectTipo = document.getElementById('lista-tipo');
const pokemonesPrimeraPG = document.getElementById('root');

const pintarNombresEnSelect = (arrNombres, elementoDOM) => {
  let string = '<option value ="--">Calculadora de evolucion Pokemon</option>';
  for (let i = 0; i < arrNombres.length; i++) {
    string += `<option value="${arrNombres[i].Nombre}">${arrNombres[i].Nombre}</option>`;
  }
  elementoDOM.innerHTML = string;
};
pintarNombresEnSelect(Pokemon.ordenando(Pokemon.nombrePokeEvolucion(dataPokemon, 'candy_count'), 'ASCENDENTE'), selectNamesElement);

const pintarTiposEnSelect = (arrNombres, elementoDOM) => {
  let string = '<option value ="--">Elige un tipo de Pokemon</option>';
  for (let i = 0; i < arrNombres.length; i++) {
    string += `<option value="${arrNombres[i]}">${arrNombres[i]}</option>`;
  }
  elementoDOM.innerHTML = string;
};
pintarTiposEnSelect((Pokemon.listaTiposPoke(dataPokemon)), selectTipo);

const pintarNombresPrimeraPG = (arrNombres, elementoDOM, showCaramelos = false) => {
  let string = '';
  for (let i = 0; i < arrNombres.length; i++) {
    string += `<div class='flex-data'>
  <p>${arrNombres[i].Nombre}</p>
    <div>
      <img src=${arrNombres[i].Imagen} />
    </div>
    <div>
      <p><strong>Tipo: </strong>${arrNombres[i].Tipo}</p>
      <p><strong>Caramelos: </strong>${arrNombres[i].Caramelos}</p>
      <p><strong>Huevo: </strong>${arrNombres[i].Huevo}</p>
    </div>
  </div>
  ${showCaramelos ? '<div class="candys"><p> Ingresa los números de caramelos que tienes: <input type="number" class="candys-number"name="caramelos" id="Ncaramelo" min="0" max="100"/> </p>' +
        '<button type="button" class="candys-button"  id="consultar">Consultar</button>' +
        '<p id="resultado"></p></div>' : ''}`;
  }
  elementoDOM.innerHTML = string;
};
pintarNombresPrimeraPG(Pokemon.obtenerCaracteris(dataPokemon), pokemonesPrimeraPG);

const botonAZ = document.getElementById('A-Z');
const botonZA = document.getElementById('Z-A');

const resetSelect = (element) => {
  element.value = '--';
};

botonAZ.addEventListener('click', () => {
  resetSelect(selectTipo);
  resetSelect(selectNamesElement);
  const pokemons = Pokemon.ordenando(Pokemon.obtenerCaracteris(dataPokemon), 'ASCENDENTE');
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
});

botonZA.addEventListener('click', () => {
  resetSelect(selectTipo);
  resetSelect(selectNamesElement);
  const pokemons = Pokemon.ordenando(Pokemon.obtenerCaracteris(dataPokemon), 'DESCENDENTE');
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
});


selectNamesElement.addEventListener('change', (element) => {
  location.href="#root";
  resetSelect(selectTipo);
  const pokemons = Pokemon.filtrarTodos(dataPokemon, 'name', element.target.value);
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG, true);
  const consultar = document.getElementById('consultar');
  const Ncaramelo = document.getElementById('Ncaramelo');
  const resultado = document.getElementById('resultado');
  const selectNamesValue = document.getElementById('lista-nombres').value;
  consultar.addEventListener('click', () => {
    const ValueNcaram = parseInt(Ncaramelo.value);
    const Total = Pokemon.operacion(dataPokemon, ValueNcaram, selectNamesValue);
    const NomeEvolu = Pokemon.NameEvolucion(dataPokemon, selectNamesValue);
    resultado.innerHTML = `Te falta ${Total} caramelos para que evolucione a <strong>${NomeEvolu}</strong>`;
  });
});

selectTipo.addEventListener('change', (element) => {
  location.href="#root";
  resetSelect(selectNamesElement);
  const pokemons = Pokemon.filtrarTipos(dataPokemon, 'type', element.target.value);
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
});


