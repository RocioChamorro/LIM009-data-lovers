/* Manejo del DOM */

/* Pintar los nombres de los pokemones*/

const dataPokemon = POKEMON.pokemon; // Array de Objetos
const selectNamesElement = document.getElementById('lista-nombres');
const selectTipo = document.getElementById('lista-tipo');
const pokemonesPrimeraPG = document.getElementById("root");

const pintarNombresEnSelect = (arrNombres, elementoDOM,) => {
  let string = '<option value ="--">Seleccione un pokemon</option>';
  for(let i = 0; i < arrNombres.length; i++){
    
    string += `<option value="${arrNombres[i].Nombre}">${arrNombres[i].Nombre}</option>`; 
    
  }
  elementoDOM.innerHTML = string;
}
pintarNombresEnSelect((nombrePokeEvolucion(dataPokemon,"candy_count").sort(ordenarAZ)),selectNamesElement);

const pintarTiposEnSelect = (arrNombres, elementoDOM,) => {
  let string = '<option value ="--">Seleccione un tipo pokemon</option>';
  for(let i = 0; i < arrNombres.length; i++){
    string += `<option value="${arrNombres[i]}">${arrNombres[i]}</option>`
  }
  elementoDOM.innerHTML = string;
}
pintarTiposEnSelect((listaTiposPoke(dataPokemon)),selectTipo);

const pintarNombresPrimeraPG= (arrNombres, elementoDOM, showCaramelos = false) => {
let string= "";
for(let i = 0; i < arrNombres.length; i++){
  string += `<div>
  <p>${arrNombres[i].Nombre}</p>
    <div>
      <img src=${arrNombres[i].Imagen} />
    </div>
    <div>
      <p><strong>Tipo: </strong>${arrNombres[i].Tipo}</p>
      <p><strong>Caramelos: </strong>${arrNombres[i].Caramelos}</p>
      <p><strong>Huevo: </strong>${arrNombres[i].Huevo}</p>
  ${showCaramelos ? '<p> Ingresa los números de caramelos que tienes: <input type="number" name="caramelos" id="Ncaramelo" min="0" max="100"/> </p>' +  
  '<button type="button" id="consultar">Consultar</button>' + 
    '<p id="resultado"></p>': ""}
    
    </div>
  </div> 
  `;
}
elementoDOM.innerHTML = string;
}
pintarNombresPrimeraPG(obtenerCaracteris(dataPokemon),pokemonesPrimeraPG);

const botonAZ = document.getElementById("A-Z");
const botonZA = document.getElementById("Z-A");

const resetSelect = (element) => {
  element.value="--";
}

botonAZ.addEventListener("click", () => {
  resetSelect(selectTipo);
  resetSelect(selectNamesElement);
  const pokemons = obtenerCaracteris(dataPokemon).sort(ordenarAZ);
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
});

botonZA.addEventListener("click", () => {
  resetSelect(selectTipo);
  resetSelect(selectNamesElement);
  const pokemons = (obtenerCaracteris(dataPokemon).sort(ordenarAZ)).reverse();
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
});

selectNamesElement.addEventListener("change",(e)=>{
  resetSelect(selectTipo);
  const pokemons = filtrarTodos(dataPokemon, "name", e.target.value)
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG, true);
  const consultar = document.getElementById("consultar");
  const Ncaramelo = document.getElementById("Ncaramelo");
  const resultado = document.getElementById("resultado");
  const selectNamesValue = document.getElementById('lista-nombres').value;
  consultar.addEventListener("click", () => {
    const ValueNcaram = parseInt(Ncaramelo.value);
    const Total = operacion(dataPokemon, ValueNcaram, selectNamesValue);
    const NomeEvolu = imgEvolucion(dataPokemon, selectNamesValue);
    resultado.innerHTML= `Te falta ${Total} caramelos para que evolucione a <strong>${NomeEvolu}</strong>`;
  })
});

selectTipo.addEventListener("change",(e)=>{
  resetSelect(selectNamesElement);
  const pokemons = filtrarTipos(dataPokemon, "type", e.target.value)
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
});



