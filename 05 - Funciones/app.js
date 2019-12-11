/*FUNCIONES



function cuadradoNumero(numero){
    return Math.pow(numero,2);
}

let num = 3;
console.log(cuadradoNumero(num));

function calcularEdad(yearBirth){
    return 2019 - yearBirth;
}
let yearFacu=1994, nombreFacu='Facundo';
function cuantoFalta(year,nombre){
    cantYears = 65 - calcularEdad(year);
    return ('A '+nombre+ ' le faltan ' + cantYears + ' años para jubilarse');
}
console.log(cuantoFalta(yearFacu,nombreFacu));

let prueba = function(){
    console.log('test');
}

prueba();

//argumentos por defecto

let sumar =function(a,b, c = 3){
    return a + b + c;
}
console.log(sumar(10,4))

//plantillas de cadena (template string)

let nombre = 'Pablo';
console.log(`el nombre es ${nombre}`);

*/

//EJERCICIO 4


function calculaPorcentaje(nombre,pos,neg){
    let positiva= (pos/100)*100;
    let negativa = (neg/100)*100;
    console.log(`${nombre} tiene ${positiva}% positivo y ${negativa}% negativo`);
    if((positiva<45)&&(positiva>=0)){
        return (`${nombre} tiene una D (${positiva}%)`)
    }else if((positiva<70)&&(positiva>=45)){
        return (`${nombre} tiene una C (${positiva}%)`)
    }else if((positiva<90)&&(positiva>=70)){
        return (`${nombre} tiene una B (${positiva}%)`)
    }else if ((positiva>=90)&&(positiva<=100)){
        return (`${nombre} tiene una A (${positiva}%)`)
    }
    else{
        return ('cantidad fuera de rango');
    }
}
console.log(calculaPorcentaje('Pablo', -44, 28));