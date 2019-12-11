/*let pesoLuis = 72;
let alturaLuis = 1.72;
let pesoCarlos = 89;
let alturaCarlos = 1.75;

let imcLuis = pesoLuis / (alturaLuis^2);
let imcCarlos = pesoCarlos / (alturaCarlos^2);
console.log(imcLuis);
console.log(imcCarlos);
// Operador ternario
let nombre = 'Pablo';
let edad = 15;

edad >= 18 ? console.log(nombre + 'es mayor de edad') : console.log(nombre + 'es menor de edad');

//Sentencia switch
let mes = 3;
switch(mes){
    case 1:
        console.log('Enero');
        break;
        case 2:
            console.log('Febrero');
            break;
            case 3:
                console.log('Marzo');
                break;
                case 4: 
                console.log('Abril');
                break;
                default:
                    console.log('Mes no considerado');
                }
                
//Sentencia FOR

for (let i=0; i<=10; i++){
    console.log(i);
}

// sentencia while

let i=1;
while(i <= 10){
    console.log(i);
    i++;
}
let i = 1;
do{
    console.log(i);
    i++;
}while(i<=10);
 */

 let notaPablo1 =14;
 let notaPablo2 =18;
 let notaPablo3 =16;

 let notaMaria1 =14;
 let notaMaria2 =16;
 let notaMaria3 =18;

 let promedioPablo = (notaPablo1 + notaPablo2 + notaPablo3) / 3;
 let promedioMaria = (notaMaria1 + notaMaria2 + notaMaria3) / 3;

 if(promedioPablo>promedioMaria){
     console.log('El promedio de Pablo es mayor que el de Maria con: '+ promedioPablo);
 }
 else if(promedioPablo==promedioMaria){
    console.log('El promedio es igual con: '+ promedioPablo);
 }
 else{
    console.log('El promedio de Maria es mayor que el de Pablo con: '+ promedioMaria);
 }

 if(promedioPablo>=13){
     console.log('Pablo aprobo con:' +promedioPablo);
 }
 else{
    console.log('Pablo desaprobo con:' +promedioPablo);
 }

 if(promedioMaria>=13){
    console.log('Maria aprobo con:' +promedioMaria);
}
else{
   console.log('Maria desaprobo con:' +promedioMaria);
}