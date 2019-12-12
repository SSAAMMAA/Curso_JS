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
   */

   const getUsuarios = ()=>{
       setTimeout(()=>{
            const userIDs = [101,102,103,104];
            console.log(userIDs);
            setTimeout((id) => {
                const usuario = {
                    email:'facundo@gmail.com',
                    nombre:'Facu'
                }
                console.log(`${id} - ${usuario.email} - ${usuario.nombre}`)
            },1500, userIDs[1]);
       },1500);
   }
   getUsuarios();