// const nombre = 'Pedro'; //Constante
// let edad = 28; 

/**
 * Alcance de variables LET Y CONST solo viven en el bloque
 */

/**
 * TEMPLATE STRING
 */

// let nombre = 'Pablo';
// let apellido = 'Calandria';
// // const ciudad = 'Tandil';
// // const nacimiento = 1985;
// // function calcularEdad(year){
// //     return 2019 - year;
// // }

// // console.log(`${nombre} ${apellido}, nacio en ${ciudad}, y su edad es ${calcularEdad(nacimiento)}`);
// let nombreCompleto = `${nombre} ${apellido}`;
// console.log(`${nombre} `.repeat(5)); //Repite 5 veces con un espacio
// console.log(nombreCompleto.includes('blo')); //devuelve true si lo que se le pasa por parametro existe
// console.log(nombreCompleto.startsWith('Pa'));// devuelve verdadero si empieza con lo que se le pasa
// console.log(nombreCompleto.endsWith('dria'));
/**
 *
 * 
 * Arrow Functions
 * 
 ** 
const years = [2000,2005,2008,2012];
//ES5
var edad5 =years.map(function(e){
    return 2019 - e;
});
console.log(edad5);

//ES6
let edad6 = years.map(el => 2019 - el);

edad6 = years.map((el,index)=>`Edad ${index +1}: ${2019 -el}`);

edad6 = years.map(
    (el, index) => {
        const yearActual = new Date().getFullYear();
        const edad = yearActual - el;
        return `Edad ${index +1}: ${edad}`;
    }
    );
    console.log(edad6);

const cuadrado = num => num * num;

const personas = [
    {
        nombre: 'Pablo',
        edad: 20
    },
    {
        nombre: 'Ana',
        edad:25
    },
    {
        nombre: 'Carlos',
        edad: 27
    }
];

// const menores30 = personas.filter(function(persona){
//     return persona.edad < 30;
// });

const menores30 = personas.filter((persona)=> persona.edad < 30);
*/

/**
 * Destructuracion - destruccion - destructing
 **/
  
 /*
 var [nombre, edad] = ['Pablo', 25];
 
 const persona = {
     nombre = 'Carlos',
     edad:30
    }
    const {nombre, edad} = persona;
    
    const calcularMayoriaEdad = (year)  => {
        const edad = new Date().getFullYear() - year;
        const mayoria = edad >= 18 ? true : false;
        return [edad, mayoria];
    }
    
    const [edad2, mayoria] = calcularMayoriaEdad(2010);
    console.log(edad2);
    console.log(`Es mayor de edad: ${mayoria}`);
 */

 /**
  * Mapas
  **/
/*
const datos = new Map();

datos.set('nombre', 'Facundo'); // setear nombre
datos.set('edad', 30);
datos.set(1, 'facu@gmail.com');
datos.set(2, 'sama@gmail.com');

datos.get('nombre'); //Obtener nombre

datos.size; //obtiene el tamaño

//datos.delete(nombre); //borra la entrada con la clave nombre

//datos.clear(); // borra todo el mapa

datos.forEach((value,key) =>{
    console.log(`${key} : ${value}`);
});
*/

/**
 * Spread operator
 */

 let suma = function(a,b,c,d){
     return a+b+c+d;
 }

 let ope1 = suma(10,20,30,40);
 console.log(ope1);

 let valores = [10,20,30,40]
 const ope2 = suma(...valores);

 console.log(ope2);

 const rrhh = ['Pedro', 'Pablo', 'Ana'];
 const contabilidad = ['Felipe', 'Carlos', 'Maria'];
 const empresa = [...rrhh, ...contabilidad];
 console.log(empresa);