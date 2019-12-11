//Agregar un elemento a la lista

let form = document.querySelector('#formAgregar');
let lista = document.querySelector('#items');
let filtro = document.querySelector('#filtro');


//Evento submit del formulario
form.addEventListener('submit', agregarItem);
//Evento click de la lista
lista.addEventListener('click', eliminarItem);
//Evento de teclado
filtro.addEventListener('keyup', filtrarItems)

function agregarItem(e){
    e.preventDefault();
    let newItem = document.querySelector('#item').value;
    let li =document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    
    let botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));
    li.appendChild(botonDel);

    lista.appendChild(li);
    //console.log(newItem);
}

function eliminarItem(e){
    e.preventDefault();
    if(e.target.classList.contains('eliminar')){
        if(confirm('Seguro que desea eliminar el elemento?')){
            let li = e.target.parentElement;
            lista.removeChild(li);
        }
    }
}

function filtrarItems(e){
    let texto = e.target.value.toLowerCase();
    let items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemNombre = item.firstChild.textContent;
        if (itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display ='block';
        }else{
            item.style.display = 'none';
        }
    });
}