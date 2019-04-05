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
      <p>${arrNombres[i].Tipo}</p>
      <p>${arrNombres[i].Caramelos}</p>
      <p>${arrNombres[i].Huevo}</p>
  ${showCaramelos ? '<p> Número de caramelos: <input type="number" name="caramelos" id="Ncaramelo"/> </p> <button type="button" id="consultar">Consultar</button> <p id="resultado"></p>' : ""}
    </div>
  </div> 
  `;
}
elementoDOM.innerHTML = string;
}
pintarNombresPrimeraPG(obtenerCaracteris(dataPokemon),pokemonesPrimeraPG);


const botonAZ = document.getElementById("A-Z");
const botonZA = document.getElementById("Z-A");

botonAZ.addEventListener("click", () => {
  const pokemons = obtenerCaracteris(dataPokemon).sort(ordenarAZ);
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
});

botonZA.addEventListener("click", () => {
  const pokemons = (obtenerCaracteris(dataPokemon).sort(ordenarAZ)).reverse();
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
});


selectNamesElement.addEventListener("change",(e)=>{
  const pokemons = filtrarTodos(dataPokemon, "name", e.target.value)
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG, true);
  const consultar = document.getElementById("consultar");
  const Ncaramelo = document.getElementById("Ncaramelo");
  const resultado = document.getElementById("resultado");
  const selectNamesValue = document.getElementById('lista-nombres').value;
  consultar.addEventListener("click", () => {
    const ValueNcaram = parseInt(Ncaramelo.value);
    const Total = operacion(dataPokemon, ValueNcaram, selectNamesValue);
    resultado.innerHTML= Total;
  })
});


selectTipo.addEventListener("change",(e)=>{
  const pokemons = filtrarTipos(dataPokemon, "type", e.target.value)
  pintarNombresPrimeraPG(pokemons, pokemonesPrimeraPG);
});




// const funtCharact=(arrData, idTexto, selec )=>{
//   for(let i=0; i< arrData.length;i++){
//     selec.innerHTML += `<option value="${arrData[i]}">${arrData[i]}</option>
//     `;
//     selec.addEventListener("change",(e)=>{
//     if(arrData[i]=== e.target.value ){
//       const textCaract=
//       `<div>
//       <p>${arrData[i]}</p>  
//       <p><strong>Tipo: </strong>${POKEMON.pokemon[i].type}</p>  
//       </div>`; 
//       idTexto.innerHTML = textCaract;
      
//       }
//       return arrData;
//     })
//   }
// };














/*
const funlist=(data) => {
  const listPoke = document.getElementById("list");
  const arrNomOrder= ordenar(arrNom, "asc");
  for(let i=0; i< data.length;i++)
  {
    listPoke.innerHTML += `<option value="${arrNomOrder[i]}">${arrNomOrder[i]}</option>
    `;
  }
  return data;
}
console.log(funlist(POKEMON.pokemon));


const listDespe = document.getElementById("list");
const caracteristicas = document.getElementById("caracteristicas");
listDespe.addEventListener("change",(e)=>{
//console.log(e.target.value);
  for(i=0; i< POKEMON.pokemon.length; i++){
    if(POKEMON.pokemon[i].name === e.target.value){
      const textCaract =
      `<div>
        <p>${POKEMON.pokemon[i].name}</p>  
      </div>`; 
      caracteristicas.innerHTML += ` ${textCaract}`;
    }
    return;
  }
})
*/
// let valueTipo="";
// for(let i=0; i<arrTipo.length; i++){
// valueTipo += [arrTipo[i].type][i];
// }
// console.log(POKEMON.pokemon);



/*const arrTipo=['Grass', 'Poison', 'Fire', 'Flying', 'Water', 'Bug', 'Normal', 'Electric', 'Ground', 'Fighting', 'Psychic', 'Rock', 'Ice', 'Ghost', 'Dragon'];
const arrOrderTipo= ordenar(arrTipo, "asc");
const arrNomOrder= ordenar(arrNom, "asc");
const characteristics = document.getElementById("caracteristicas");
const tipo= document.getElementById("tipo");
const removable = document.getElementById("list");
const tipoRemovable= document.getElementById("tipoList")

for(let i=0; i< arrData.length;i++){
  selec.innerHTML += `<option value="${arrData[i]}">${arrData[i]}</option>
  `;
const seleccionarPokemonPorNombre= (arr, string) =>{
if(string === "nombredelPokemon"){
    `<div>
    <p>${arr}</p>  
    </div>`; 
  }
  return arr;
}

selec.addEventListener("change",(e)=>{
  const 
  characteristics.innerHTML= seleccionarPokemonPorNombre(arr,e. );
})

seleccionarPokemonPorNombre(arrData, 'nombredelpokemon')*/
/*
const funtCharact=(arrData, idTexto, selec )=>{
  for(let i=0; i< arrData.length;i++){
    selec.innerHTML += `<option value="${arrData[i]}">${arrData[i]}</option>
    `;
    selec.addEventListener("change",(e)=>{
    if(arrData[i]=== e.target.value ){
      const textCaract=
      `<div>
      <p>${arrData[i]}</p>  
      <p><strong>Tipo: </strong>${POKEMON.pokemon[i].type}</p>  
      </div>`; 
      idTexto.innerHTML = textCaract;
      
      }
      return arrData;
    })
  }
};
console.log(funtCharact(arrNomOrder, characteristics, removable));
console.log(funtCharact(arrOrderTipo, tipo, tipoRemovable));
*/
// if(POKEMON.pokemon[i].type[0]indexOf>0)
 /*
const charact = document.getElementById ("charact");
listDespe.addEventListener("click", ()=>{
  const charactFilt = filtrar(arrNom, "list");
  let i=0;
  let text = "";
  while(charactFilt[i]){
    text += charactFilt[i];
    i++;
  }
 charact.innerHTML+= text;
 */
// listaPoke.innerHTML += `<div>
//       <img src =${data[i].img} />
//       <div>
//         <p>${data[i].name}</p>  
//       </div>
//     </div>
//  `; 
// });

/*
const filtrar=(arrFilt, id)=>{
  for(let i=0; i<arrFilt.length; i++){
  arrFilt[i]=document.getElementById(id).value;
  }
  return arrFilt;
}

*/