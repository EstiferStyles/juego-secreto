let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = []
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificacionIntento () {
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);
    console.log (numeroSecreto)
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++; 
        limpiarCaja ();
    }
    return; 
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumeroSorteado);
    // si ya llegamos a sorteo de numeros maximos
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles")
    } else{

    //si el numero generado esta en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`indica un numero del 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicxar mensaje de intervalo de numeros
    //generar el numero aletorio
    //iiniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();