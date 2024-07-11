let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos = 4;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos===1) ? "intento" : "intentos"}!`);
    document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario acierta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        }else{
            asignarTextoElemento ("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
        return;
}


function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se han sorteado todos los numeros posibles");
    }else{
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //inicializar el numero de intentos
    intentos = 1;
}

function reiniciarJuego() {
  //vaciar Caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego  

  document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();

