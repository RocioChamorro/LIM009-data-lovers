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

window.example = example;
*/
