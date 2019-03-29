/* Manejo de data */

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
}
*/
//ordenar(arrNom);
//console.log(ordenar(arrNom));
const ordenar=(arrOrder, forma)=>{
  if(forma==="asc"){
    arrOrder.sort();
  }
  else{
    arrOrder.sort();
    arrOrder.reverse();
  }
  return arrOrder;
}
/*
const filtrar=(arrFilt, id)=>{
  for(let i=0; i<arrFilt.length; i++){
  arrFilt[i]=document.getElementById(id).value;
  }
  return arrFilt;
}
*/







/*
let dataOrder = [];
for(let i of arr){
dataOrder = arr.sort();
};
console.log(dataOrder);

let dataReverse = [];
for(let i of arr){
dataReverse = arr.reverse(arr[i]);
};
console.log(dataReverse);
*/