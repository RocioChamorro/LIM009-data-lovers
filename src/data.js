/* Manejo de data */
const obtenerCaracteris = (arr) => {
  const arrNombres = [];
  for (let i = 0; i < arr.length; i++) {
    arrNombres.push({ Nombre: arr[i].name, Imagen: arr[i].img, Tipo: arr[i].type, Caramelos: arr[i].candy_count, Huevo: arr[i].egg });
  }
  return arrNombres;
};

const nombrePokeEvolucion = (arr, propiedad) => {
  const arrNombres = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i][propiedad]) !== 'undefined')
      arrNombres.push({ Nombre: arr[i].name, Imagen: arr[i].img, Tipo: arr[i].type, Caramelos: arr[i].candy_count, Huevo: arr[i].egg });
  }
  return arrNombres;
};

const ordenarAZ = (primer, secund) => {
  if (primer.Nombre.toLowerCase() > secund.Nombre.toLowerCase()) {
    return 1;
  } else if (primer.Nombre.toLowerCase() < secund.Nombre.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
};

const ordenando = (arr, dentroSort) => {
  let ordenadoAZ;
  let ordenadoZA;
  if (dentroSort === 'ASCENDENTE') {
    ordenadoAZ = [...arr].sort(ordenarAZ);
    return ordenadoAZ;
  } else if (dentroSort === 'DESCENDENTE') {
    ordenadoAZ = [...arr].sort(ordenarAZ);
    ordenadoZA = ordenadoAZ.reverse();
    return ordenadoZA;
  }
};

const filtrarTipos = (arrFilt, propiedad, valorPropiedad) => {
  const arrCaracter = [];
  for (let i = 0; i < arrFilt.length; i++) {
    let arrtipo = arrFilt[i][propiedad];
    for (let j = 0; j < arrtipo.length; j++) {
      if (arrtipo[j] === valorPropiedad) {
        arrCaracter.push({ Nombre: arrFilt[i].name, Imagen: arrFilt[i].img, Tipo: arrFilt[i].type, Caramelos: arrFilt[i].candy_count, Huevo: arrFilt[i].egg });
      }
    }
  }
  return arrCaracter;
};

const filtrarTodos = (arrFilt, propiedad, valorPropiedad) => {
  const arrCaracter = [];
  for (let i = 0; i < arrFilt.length; i++) {
    if (arrFilt[i][propiedad] === valorPropiedad) {
      arrCaracter.push({ Nombre: arrFilt[i].name, Imagen: arrFilt[i].img, Tipo: arrFilt[i].type, Caramelos: arrFilt[i].candy_count, Huevo: arrFilt[i].egg });
      // arrCaracter.push(arrFilt[i]);
    }
  }
  return arrCaracter;
};

const listaTiposPoke = (arr) => {
  let arrTipo = [];
  for (let i = 0; i < arr.length; i++) {
    let NombresTipo = arr[i].type;
    for (let j = 0; j < NombresTipo.length; j++) {
      if (arrTipo.indexOf(NombresTipo[j]) === -1) {
        arrTipo.push(NombresTipo[j]);
      }
    }
  }
  return arrTipo;
};

const operacion = (arr, num, ValueSelect) => {
  let lack = 0;
  for (let i = 0; i < arr.length; i++) {
    if (ValueSelect === arr[i].name) {
      lack = arr[i].candy_count - num;
    }
  }
  return lack;
};

const NameEvolucion = (arr, ValueSelect) => {
  let NomeEvol;
  let arrname;
  for (let i = 0; i < arr.length; i++) {
    if (ValueSelect === arr[i].name) {
      arrname = arr[i].next_evolution;
      for (let j = 0; j < 1; j++) {
        NomeEvol = arrname[j].name;
      }
    }
  }
  return NomeEvol;
};

window.Pokemon = {
  obtenerCaracteris: obtenerCaracteris,
  nombrePokeEvolucion: nombrePokeEvolucion,
  filtrarTodos: filtrarTodos,
  listaTiposPoke: listaTiposPoke,
  filtrarTipos: filtrarTipos,
  operacion: operacion,
  NameEvolucion: NameEvolucion,
  ordenando: ordenando
};

