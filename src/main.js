/* Manejo del DOM */
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
const arrNomOrder= ordenar(arrNom, "asc");
const characteristics = document.getElementById("caracteristicas");
const removable = document.getElementById("list");
const funtCharact=(arrData )=>{
  for(let i=0; i< arrData.length;i++){
    removable.innerHTML += `<option value="${arrData[i]}">${arrData[i]}</option>
    `;
    removable.addEventListener("change",(e)=>{
    if(arrData[i]=== e.target.value ){
      const textCaract=
      `<div>
      <p>${arrData[i]}</p>  
      </div>`; 
      characteristics.innerHTML += textCaract;
      }
      return arrData;
    })
  }
};
console.log(funtCharact(arrNomOrder));


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