/**
 * Manejo de arreglos
 * *
 const ceviche = ['Pescado', 'Mariscos', 'Cebolla'];
 ceviche.push('limon'); // agrega un elemento al final
 ceviche.pop(); // borra el ultimo elemento
 ceviche.unshift('Papas'); // agrega al principio del arreglo
 ceviche.splice(1,1); //borra el elemento 1 en la posicion 1
 ceviche.splice(1,0,'Limon'); //no borra ningun elemento pero agrega Limon en la posicion 1
 
 const ceviche = ['Pescado', 'Mariscos', 'Cebolla'];
 ceviche.forEach(function(ingrediente, index){ //primera posicion devuelve el contenido, segunda devuelve el indice
    console.log(ingrediente);
    console.log(index);
});

for (let i=0; i<ceviche.length; i++){
    console.log(`Indice: ${i} - ${ceviche[i]}`);
}
*/

const ceviche = [
    {
        codigo:1,
        titulo: 'Pescado'
    },
    {
        codigo:2,
        titulo: 'Cebolla',
        tipo: 'frescos'
    },
    {
        codigo:3,
        titulo: 'Mariscos'
    }
];
const buscarIngrediente = function(ceviche, titulo){
    const index = ceviche.findIndex(function(ing,index){
        return ing.titulo === titulo;
    });
    return index;
}
// const index = ceviche.findIndex(function(ing, index){
    //     return ing.titulo === 'Mariscos';
    // })
//const paises = ['Colombia', 'Chicle', 'Peru', 'España', 'Mexico']
//console.log(paises.filter(pais => pais.includes('ic')));

const filtrarIngredientes = ceviche.filter(function (ing, index) {
    const ingredientes = ing.titulo.includes('e');
    return ingredientes;
})

ceviche.sort(function(a,b) {
    if(a.titulo > b.titulo){
        return 1;
    }
    if(a.titulo < b.titulo){
        return -1;
    }
    return 0;
})

    console.log(ceviche);
