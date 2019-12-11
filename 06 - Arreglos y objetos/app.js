/*
Arreglos


let nombre = ['Pablo', 'Carlos', 'Ana', 'Teresa'];

nombre.forEach(function (elemento, indice, array){
    console.log(elemento, indice);
});

nombre.push('Facundo'); //agrega al final
nombre.unshift('JedyBoy'); // agrega al principio
console.log(nombre);
nombre.pop(); //elimina el ultimo elemento
nombre.shift(); //elimina el primer elemento
console.log(nombre);
let pos = nombre.indexOf('Ana'); //devuelve la posicion de Ana
nombre.splice(1,1); //borra un elemento de la posicion uno, si se cambia el segundo indice,seran mas los eliminados
*/

//let persona = ['Pablo', 'Calandria',34, 1.75]

/**
 * Objetos * 
 **/
/*
let persona = {
    nombre: 'Pablo',
    apellido: 'Calandria',
    gustos: ['Falopa', 'Nenes', 'Aquiles'],
    trabajo: 'Trolo',
    esCasado: false
};
console.log(persona.gustos);
console.log(persona['gustos']); //Otra forma de hacer lo de arriba
/**
 * Objetos con sitanxis Object
 */
/*
let persona2 = new Object();
persona2.nombre= 'Braian';
persona2['apellido'] = 'Quinteros';
persona2.trabajo = 'developer gay';

console.log(persona2);


/**
 * Objetos y metodos
 */

let persona = {
    //Propiedades
    nombre: 'Pablo',
    apellido: 'Calandria',
    gustos: ['Falopa', 'Nenes', 'Aquiles'],
    trabajo: 'Trolo',
    esCasado: false,
    yearBirth:1985,
    //Metodos
    calcularEdad: function(){
        this.edad = 2019 - this.yearBirth;
    }
};
persona.calcularEdad();
console.log(persona);