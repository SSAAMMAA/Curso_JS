//localStorage.setItem('nombreUsuario', 'Facu'); //setea un nombre de usuario con valor Facu
//localStorage.getItem('nombreUsuario'); //obtiene el valor desde local storage
//localStorage.removeItem('nombreUsuario'); //remueve un item en base a la clave que se le pasa
//localStorage.clear(); //remueve TODOS los items del local storage

/**
 * Notacion JSON
 */

 const usuario = {
    nombre: 'Facu',
    edad:30
 }

 const usuarioJSON = JSON.stringify(usuario);
 localStorage.setItem('usuario', usuarioJSON);
 
 let usuarioLS = JSON.parse(localStorage.getItem('usuario'));
