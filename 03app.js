const { crearArchivo } = require('./multiplicar/multiplicar')

let base = '';

//console.log(multiplicar);
//console.log(module);

crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));