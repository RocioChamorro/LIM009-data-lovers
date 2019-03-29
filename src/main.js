/* Manejo del DOM */

const funlist=(data) => {
  const listPoke = document.getElementById("list");
  const arrNomOrder= ordenar(arrNom, "asc");
  for(let i=0; i< arrNomOrder.length;i++)
  {
    listPoke.innerHTML += `<option value="${arrNomOrder[i]}">${arrNomOrder[i]}</option>
    `;
  }
  return data;
}
console.log(funlist(POKEMON.pokemon));







const listDespe = document.getElementById("list");
const respuesta = document.getElementById("parrafo")
listDespe.addEventListener("click",(e)=>{
//console.log(e.target.value);
const prueba2 = POKEMON.pokemon[e.target.value];
 const prueba = `<div>
  <p>${prueba2.name}</p>  
  </div>
 `; 




  respuesta.innerHTML=prueba;
})
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
// listaPoke.innerHTML += `<div>
//       <img src =${data[i].img} />
//       <div>
//         <p>${data[i].name}</p>  
//       </div>
//     </div>
//  `; 
});*/
/*
const filtrar=(arrFilt, id)=>{
  for(let i=0; i<arrFilt.length; i++){
  arrFilt[i]=document.getElementById(id).value;
  }
  return arrFilt;
}

*/


//console.log(POKEMON.pokemon);

/*
console.log(funlist(POKEMON.pokemon));

let arrNom = [];
for(let i=0; i<POKEMON.pokemon.length; i++){
  arrNom.push(`<div>
    <p>${POKEMON.pokemon[i].name}<p/>
    <div>
      <img src =${POKEMON.pokemon[i].img} />
    </div>
  </div>
</div>`);
*/