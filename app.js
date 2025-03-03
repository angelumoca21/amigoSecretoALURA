// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo(){
    let amigo = (document.getElementById("amigo")).value;
    if (amigo == "")
    {
        alert("Por favor, inserte un nombre.");
    } else{
        amigos.push(amigo);
        limpiarCaja();
        imprimirAmigos();
    }
}

function limpiarCaja(){
    (document.getElementById("amigo")).value = "";
}

function imprimirAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length; i++){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo()
{
    let areaNombreSorteado = document.getElementById("resultado");
    areaNombreSorteado.innerHTML = ""
    if (amigos.length != 0)
    {
        let numeroGenerado = Math.floor(Math.random()*(amigos.length));
        let nombreSorteado = amigos[numeroGenerado]
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = `El amigo secreto es ${nombreSorteado}`;
        areaNombreSorteado.appendChild(nuevoElemento);
    }
}