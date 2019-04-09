/* Manejo de data */
const obtenerCaracteris = (arr) => {
  const arrNombres = [];
  for(let i = 0; i < arr.length; i++){
    arrNombres.push({Nombre: arr[i].name, Imagen: arr[i].img, Tipo: arr[i].type, Caramelos: arr[i].candy_count, Huevo: arr[i].egg});
  }
  return arrNombres
};

<<<<<<< HEAD
window.example = example;
*/
//console.log(POKEMON.pokemon[0].name);
//console.log(object.value(POKEMON.pokemon.));

//listaPoke = document.getElementById("root").innerHTML;
//let listaPoke = '';


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

//console.log(funPoke(POKEMON.pokemon));

/*

  for(let i=0; i< POKEMON.pokemon.length;i++)
  {
    let listaPoke += POKEMON.pokemon[i];
   
=======
const nombrePokeEvolucion = (arr,propiedad) => {
  const arrNombres = [];
  for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i][propiedad]) !== "undefined")
    arrNombres.push({Nombre: arr[i].name, Imagen: arr[i].img, Tipo: arr[i].type, Caramelos: arr[i].candy_count, Huevo: arr[i].egg});
  }
  return arrNombres
};
>>>>>>> 98bf3faf1a69ee1c6e390467e48b44fe2260e7e3

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
<<<<<<< HEAD
console.log(funPoke(POKEMON.pokemon));
*/


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
const botonAZ = document.getElementById("A-Z");
const botonZA = document.getElementById("Z-A");

const listaPoke = document.getElementById("root");

const listaPoke = document.getElementById("root");
botonAZ.addEventListener("click", ()=>{
  const arrOrder = ordenar(arrNom, "asc");
  let i=0;
  let text = "";
  while(arrOrder[i]){
    text += arrOrder[i];
    i++;
  }
listaPoke.innerHTML=text;
});

botonZA.addEventListener("click", ()=> {
  const arrOrder = ordenar(arrNom, "des");
  let i=0;
  let text = "";
  while(arrOrder[i]){
    text += arrOrder[i];
    i++;
  } 
listaPoke.innerHTML=text; 
});





=======
>>>>>>> 98bf3faf1a69ee1c6e390467e48b44fe2260e7e3

const operacion=(arr, num, ValueSelect)=>{
  let lack;
  for(let i=0; i<arr.length; i++){
    if(ValueSelect === arr[i].name){
       lack= arr[i].candy_count - num;
    } 
  }
  return lack; 
}

const imgEvolucion=(arr, ValueSelect)=>{
  let NomeEvol;
  let arrname;
  for(let i=0; i<arr.length; i++){
    if(ValueSelect === arr[i].name){
      arrname= arr[i].next_evolution;
      for(let a=0; a<1; a++){
        NomeEvol= arrname[a].name;
      }
    }
  }
  return NomeEvol;
} 
 

   

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*
const example = () => {
  return 'example';
};

<<<<<<< HEAD
let dataReverse = [];
for(let i of arr){
dataReverse = arr.reverse(arr[i]);
};
console.log(dataReverse);
*/


//console.log(POKEMON.pokemon[0].name);


/*
 for(let i of POKEMON.pokemon){
  return (`<div>
            <div>
              <p>${i.name}<p/>
             </div>
             <div>
              ${i.img}
             </div>
            </div>`);
};
*/
=======
window.example = example;
*/
>>>>>>> 98bf3faf1a69ee1c6e390467e48b44fe2260e7e3
