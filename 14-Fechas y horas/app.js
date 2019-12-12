/**
 * Manejo de hora y fecha
 
 console.log(fecha1.toDateString());
 console.log(fecha1.getMonth()); //devuelve el numero del mes arrancando desde 0
 console.log(fecha1.getDay()); // devuelve el dia de la semana arrancando como 0 siendo domingo
 console.log(fecha1.getDate()); // devuelve el numero de dia exacto
 console.log(fecha1.getHours()); // devuelve la Hora
 console.log(fecha1.getMinutes()); // devuelve los minutos
 console.log(fecha1.getSeconds()); // devuelve los segundos
 */
/**
 * Timestamp
 */

const ahora = new Date();
const fecha1 = new Date ("December 17, 2025 23:20:55");
 const timestamp = ahora.getTime();
 console.log(`Fecha Actual: ${ahora.getTime().toString()}`);
 console.log(`Fecha antigua: ${fecha1.getTime().toString()}`);
const fechaVieja = fecha1.getTime();
const fechaActual = ahora.getTime();

function calculaFechaMayor (fecha1, fecha2){
    if (fecha1 > fecha2)
        return fecha1;
    else
        return fecha2;
}
let fechaMayor = new Date(calculaFechaMayor(fechaVieja, fechaActual));
console.log(`La fecha mayor es: ${(fechaMayor).toLocaleDateString()}`);