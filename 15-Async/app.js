// funcion SetTimeOut
//setTimeout(()=>{}, 3000) //ejecuta la funcion en 3000 milisegundos (3 segundos)

/**
 * JS ASYNC
 const segundo = () =>{
     setTimeout(()=>{
         console.log('llamada a segundo');
        },2000);
    }
    
    const primero = ()=>{
        console.log('Inicio de primero');
        segundo();
        console.log('fin de primero');
    }
    
    primero();
    
    const getUsuarios = ()=>{
        setTimeout(()=>{
            const userIDs = [101,102,103,104];
            console.log(userIDs);
            setTimeout((id) => {
                const usuario = {
                    email:'facundo@gmail.com',
                    nombre:'Facu'
                }
                console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);
                
                setTimeout((idPermiso)=> {
                    const permiso = ['admin', 'creador'];
                    console.log(permiso);
                },1500, userIDs[1]);
            },1500, userIDs[1]);
        },1500);
    }
    getUsuarios();
        */

/**
 * PROMESAS
 //EJEMPLO 1
 let promesa = new Promise((resolve, reject) => {
     if (false){
         resolve('La operación fue exitosa')
        }else{
            reject('Hubo un error');
        }
    });
    promesa.then(response => {
        console.log(`Response: ${response}`);
    }).catch( error => {
        console.log(`Error: ${error}`)
    })
    
    //EJEMPLO 2
    let miPromesa = Promise.resolve('Comida');
    miPromesa.then(resp => console.log(resp));
    
    //EJEMPLO 3 
    let miPromesa2 = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(4);
            console.log(4);
        }, 2000);
    });
    miPromesa2.then(resp => {
        resp += 5;
        console.log(resp);
    });
*/
    
    /**
     * De callback a Promesa
     */
    
    const getUsuariosIDs = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([101,102,103,104]);
        },1500)
    })
    const getUsuario = userIDs => {
        return new Promise((resolve,reject)=>{
            setTimeout((id) => {
                const usuario ={
                    email: 'facundo.samartino@gmail.com',
                    nombre: 'Facundo'
                }
                resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
            },1500,userIDs)
        })
    }
    const getPermiso = id =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const permiso = ['admin', 'creador'];
                resolve(permiso);
            },1500, id);
        })
    }
    // getUsuariosIDs
    // .then(IDs =>{console.log(IDs);
    //                 return getUsuario(IDs[2])
    //             })
    // .then(usuario=>{
    //     console.log(usuario);
    //     return getPermiso(usuario.id)
    // })
    // .then(permisos=>{
    //     console.log(permisos);
    // })
    // .catch(() => {'Error'});
/**
 * ASYNC/AWAIT
 *  */    

 async function getUsuariosAW(){
    let IDs = await getUsuariosIDs;
    console.log(IDs);
    let usuario = await getUsuario(IDs[2]);
    console.log(usuario);
    let permiso = await getPermiso(usuario.id);
    console.log(permiso);
    return usuario;

 }

// getUsuariosAW();
//getUsuariosAW().then((usuario)=>console.log(`El usuario retornado es: ${usuario}`)); // se puede obtener la promesa si la funcion async devuelve algo

const request = new XMLHttpRequest();
request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 4){
        const datos = JSON.parse(e.target.responseText);
        console.log(datos);
    }
})
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();