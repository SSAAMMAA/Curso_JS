/**
 * Manejo de clases en JS
 */
/*
*/
class Persona{
     constructor(nombre, edad, profesiones =[]){
         this.nombre = nombre;
         this.edad = edad;
         this. profesiones = profesiones;
     }
    getBiografia(){
        let biografia = (`${this.nombre} tiene ${this.edad} años. Sus profesiones son: `);
        this.profesiones.forEach((profesion)=>{
            biografia += (`${profesion}, `);
        });
        return biografia;
    }
}

class Empleado extends Persona{
    constructor(nombre, edad, profesiones=[], sueldo, puesto){
        super(nombre, edad, profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;
    }
    get puesto(){
        return this._puesto;
    }
    set puesto(newPuesto){
        this._puesto = newPuesto;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(monto){
        this._sueldo = monto;
    }
    getBiografia(){
        return super.getBiografia() + `trabaja como ${this.puesto} y su sueldo es de ${this.sueldo}.`;
    }
}

const persona1 = new Empleado('Facu', 25, ['Arquitecto', 'Maestro mayor de obra', 'Albañil'], 1500, 'Gerente');
const persona2 = new Empleado('Pablo', 26, ['Ingeniero', 'Cura', 'Violinista'], 1000, 'RRHH');

/**
 * Getters and setters
 */

 const datos ={
     get ubicacion(){
         return this._ubicacion;
     },
     set ubicacion(valor){
        this._ubicacion =valor;
     }
 }