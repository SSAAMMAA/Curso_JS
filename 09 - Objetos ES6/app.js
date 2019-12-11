/** 

let miLibro = {
    titulo: 'El libro de JS',
    autor: 'Grover Pablo Vasquez',
    paginas: 400,
    publicado: false
 }
let miLibroB = {
    titulo: 'Programacion en PHP',
    autor: 'Facu',
    paginas: 700,
    publicado: true
}


let getResumen = libro => {
    return{
        resumen: `${libro.titulo} creado por ${libro.autor}`,
        resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas`
    }
}
let libroResumenA = getResumen(miLibro);
let libroResumenB = getResumen(miLibroB);


let persona = {
    nombre: 'Facundo',
    edad: 25,
    ciudad: 'Tandil'
}

persona.edad = 26;
//console.log(`${persona.nombre} tiene ${persona.edad} años y es de ${persona.ciudad}`);
*/

/**
 * Referencia de objetos
 
 let persona = {
     nombre: 'Pablo',
     edad: 30,
     sueldo: 1200
    }
    
    let otraPersona = persona;
    otraPersona.sueldo = 1500;
    
    let cambiarSueldo = (person, monto) =>{
        person.sueldo += monto;
    }
    
    cambiarSueldo(persona,500);
   */

/**
* Metodos y this

let persona = {
    nombre: 'Facu',
    edad: 30,
    sueldo: 1200,
    metodoPrueba: function() {
        console.log('Escribiendo desde el metodo');
    },
    cambiarEdad: function(e){
        this.edad = e;
    }
}

persona.cambiarEdad(25);
*/

/**
 * Objetos String
 
 let nombre = 'Facu';
 console.log(nombre.includes('fac'))
 */