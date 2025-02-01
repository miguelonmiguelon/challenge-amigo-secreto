// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
console.log(amigos);

function agregarAmigo(){
    let nombre = capturarCampoDeEntrada();
    if(validarCampoDeEntrada(nombre)){
    actualizarArray(nombre);
    limpiarCampoEntrada()
    actualizarListaAmigos();
}
}



function capturarCampoDeEntrada(){
    let inputName = document.querySelector('.input-name');
    return inputName ? inputName.value.trim() : "";
    
}
console.log(capturarCampoDeEntrada());

function validarCampoDeEntrada (){
    if(capturarCampoDeEntrada() === ""){
        alert('Por favor ingrese un nombre válido');
        return false;
    }
    return capturarCampoDeEntrada();
    
}


function actualizarArray(nombre){
    amigos.push(nombre);
    console.log(amigos);
    
}


function limpiarCampoEntrada(){
    let inputElement = document.querySelector('.input-name')
    if(inputElement){
        inputElement.value = "";
    }
    
}



function actualizarListaAmigos(){
    limpiarListaExistente();
    IterarSobreArreglo();
}



function limpiarListaExistente(){
    let lista = document.querySelector('.name-list')
    if(lista ){
        lista.innerHTML = "";
    }
}

console.log(limpiarListaExistente());

function IterarSobreArreglo(){
    let lista = document.querySelector('.name-list')
    if (!lista) return;

    amigos.forEach(nombre=>{
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li)
    })
}

IterarSobreArreglo();

function sortearAmigo(){
    let indiceAleatorio = generarIndiceAleatorio();
    let nombreSorteado = obtenerNombreSorteado(indiceAleatorio);

    mostrarResultadoEnLista(nombreSorteado)

}

function generarIndiceAleatorio(){
    return Math.floor(Math.random() * amigos.length)
}

function obtenerNombreSorteado(i){
    return amigos[i]
}

function mostrarResultadoEnLista(nombre){
    let listaResultados = document.querySelector('.result-list');

    if(listaResultados){
        let li = document.createElement('li');
        li.textContent = `El amigo secreto sorteado es : ${nombre}`
        listaResultados.appendChild(li)
    }
}




