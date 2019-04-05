/* Manejo de data */
const obtenerCaracteris = (arr) => {
  const arrNombres = [];
  for(let i = 0; i < arr.length; i++){
    arrNombres.push({Nombre: arr[i].name, Imagen: arr[i].img, Tipo: arr[i].type, Caramelos: arr[i].candy_count, Huevo: arr[i].egg});
  }
  return arrNombres
};

const nombrePokeEvolucion = (arr,propiedad) => {
  const arrNombres = [];
  for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i][propiedad]) !== "undefined")
    arrNombres.push({Nombre: arr[i].name, Imagen: arr[i].img, Tipo: arr[i].type, Caramelos: arr[i].candy_count, Huevo: arr[i].egg});
  }
  return arrNombres
};

// const sortBy = (arr, key, order = "asc") => {
//   if (order != "asc" && order != "desc" ) {
//     throw new Error("invalid order")
//   }

//   const comparators = {
//     asc: (a, b) => a[key] - b[key],
//     desc: (a, b) => b[key] - a[key]
//   }

//   return arr.sort(comparators[order])
// }

function ordenarAZ (a, b) {
  if (a.Nombre > b.Nombre) {
    return 1;
  }
  if (a.Nombre < b.Nombre) {
    return -1;
  }
  return 0;
}

const filtrarTodos=(arrFilt, propiedad, valorPropiedad)=>{
  const arrCaracter = [];
  for(let i=0; i<arrFilt.length; i++){
    if( arrFilt[i][propiedad] === valorPropiedad){
      arrCaracter.push({Nombre: arrFilt[i].name, Imagen: arrFilt[i].img, Tipo: arrFilt[i].type, Caramelos: arrFilt[i].candy_count, Huevo: arrFilt[i].egg});
      //arrCaracter.push(arrFilt[i]);
    }
  }
  return arrCaracter;      
}

const listaTiposPoke=(arr)=>{
  let arrTipo = [];
  for(let i = 0; i < arr.length; i++){
    let NombresTipo = arr[i].type;
    for(let a = 0; a < NombresTipo.length; a++){
      if(arrTipo.indexOf(NombresTipo[a])=== -1 ){
        arrTipo.push(NombresTipo[a]);
      }
    }
  }
  return arrTipo;
}

const filtrarTipos=(arrFilt, propiedad, valorPropiedad)=>{
  const arrCaracter = [];
  for(let i=0; i<arrFilt.length; i++){
    let arrtipo = arrFilt[i][propiedad];
    for(let a=0; a < arrtipo.length; a++){
    if( arrtipo[a] === valorPropiedad){
      arrCaracter.push({Nombre: arrFilt[i].name, Imagen: arrFilt[i].img, Tipo: arrFilt[i].type, Caramelos: arrFilt[i].candy_count, Huevo: arrFilt[i].egg});
      //arrCaracter.push(arrFilt[i]);
      }
    }    
  }
  return arrCaracter;
}

const operacion=(arr, num, ValueSelect)=>{
  let lack;
  for(let i=0; i<arr.length; i++){
    if(ValueSelect === arr[i].name){
       lack= arr[i].candy_count - num;
    } 
  }
  return lack; 
}


// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*
const example = () => {
  return 'example';
};

window.example = example;
*/
//console.log(POKEMON.pokemon[0].name);
//console.log(object.value(POKEMON.pokemon.));

//listaPoke = document.getElementById("root").innerHTML;
//let listaPoke = '';

/*
const funPoke=(data) => {
  const listaPoke = document.getElementById("root");
  for(let i=0; i< data.length;i++)
  {
    listaPoke.innerHTML += `<div>
      <img src =${data[i].img} />
      <div>
        <p>${data[i].name}</p>  
      </div>
    </div>
 `; 
  }
}

console.log(funPoke(POKEMON.pokemon));
*/
/*

  for(let i=0; i< POKEMON.pokemon.length;i++)
  {
    let listaPoke += POKEMON.pokemon[i];
   

  }
console.log(listaPoke);
*/





/*
for(let i=0; i<POKEMON.pokemon.length; i++){
  const arrProperPoke=Object.entries(POKEMON.pokemon[i])
  console.log(arrProperPoke[2]);
  // console.log(POKEMON.pokemon[i][arrProperPoke[i]]);
}



*/




//document.getElementById("p").innerHTML=listaPoke;










/*

const boxPoke = () => {
for(i=0; i< POKEMON.pokemon.length;i++){
  box.innerHTML +=
  <div>

  </div>
}
}
*/
/*
const conteinerPoke =
document.getElementById("root");
const infoPoke = document.getElementById("");

let string = "";
for(let i=0; i<POKEMON.pokemon.length; i++){
  string += `
  <input type="radio" name="gender" value=${arrNamesProperty[i]}>${arrNamesProperty[i]}<br> `
}
*/

/*
const funPoke=(data) => {
  const listaPoke = document.getElementById("root");
  for(let i=0; i< data.length;i++)
  { 
    listaPoke.innerHTML += `<div>
      <img src =${data[i].img} />
      <div>
        <p>${data[i].name}</p>  
      </div>
    </div>
 `; 
  }
}
console.log(funPoke(POKEMON.pokemon));
*/
/*
let arrNom = [];
for(let i=0; i<POKEMON.pokemon.length; i++){
  arrNom.push(`<div>
    <p>${POKEMON.pokemon[i].name}<p/>
    <div>
      <img src =${POKEMON.pokemon[i].img} />
    </div>
  </div>
</div>`);
}
*/




/*
function ordenarAZ(arr){
if(botonAZ.value === "A-Z"){
  arr.sort();
}
 return arr;
}


function ordenarZA(arr){
  if(botonZA.value === "Z-A"){
    arr.sort();
    arr.reverse();
   
  }
 
  return arr;
}*/

//ordenar(arrNom);
//console.log(ordenar(arrNom));
