//Banco de palabras
listaDePalabras = ['alura', 'oracle', 'programar', 'one', 'challenge', 'ahorcado', 'javascript', 'poo', 'primer'];
//test change for git.
// Variables globales que se actualizan con mas frecuencia
//array de letras
listaLetrasCorrectas = [];
listaLetraIncorrecta = [];
var juegoActivo = true;
//palabra elegida
var palabraAzar = elegirPalabraAlAzar();
//le hace split al la palabra random
var palabraSplit = palabraAzar.split("");
// Funciones
//Funcion para elegir palabra random 
function elegirPalabraAlAzar() {
    var palabraEscogida = listaDePalabras[Math.floor(Math.random() * listaDePalabras.length)];
    return palabraEscogida;
}
//Funcion que recibe las letras del keyboard, si esta en la palabra a adivinar-
//la muestra en el canvas de las palabras correctas.

function capturarLetra() {
    document.addEventListener("keydown", (event) => {
        var keyValue = event.key;
        console.log("valor de letra " + keyValue);
        var keyValueLower = keyValue.toLowerCase();
        console.log("keyValue " + keyValueLower);
        if (keyValueLower.match(/^[a-z]+$/)) {
            if (listaLetrasCorrectas.includes(keyValueLower) && juegoActivo) {
                alert("La letra ya fue usada");
            } else {
                var x = 400;
                var y = 500;
                let i = 0;
                while (i < palabraSplit.length) {
                    if (keyValueLower == palabraSplit[i] && juegoActivo) {
                        //recorer string de la palabra
                        //pintar letra en el canvas
                        llenarPalabra(palabraSplit[i], x, y);
                        listaLetrasCorrectas.push(keyValueLower);
                    }
                    x += 20;
                    i++;
                }
                    console.log("lista letras correctas "+listaLetrasCorrectas);
                    if (listaLetrasCorrectas.length == palabraSplit.length && juegoActivo){
                        ganastesMessage("Felicidades Ganastes", x-130, y-40);
                        juegoActivo = false;
                        return;
                    }
            }
            var activeS = event.getModifierState("Shift");
            var activeC = event.getModifierState("Control");
            var activeA = event.getModifierState("Alt");
            var activeE = event.getModifierState("Enter");
            var activeTab = event.getModifierState("Tab");
            var activeCap = event.getModifierState("CapsLock");
            var activeBack = event.getModifierState("Backspace");
            if ((activeCap || activeE || activeTab || activeBack || activeS || activeC || activeA || activeCap)){
            
            } else if (juegoActivo) {
                letraIncorrecta(keyValueLower);
            }

        } else if (juegoActivo){
            alert("Los numeros no son validos");
        }


    });


}
//Funcio que recibe las letras del keyboard, si no esta en la palaba a adivinar
//la muestra en el canvas de letras incorrectas, valida si la letra ya fue usada.
function letraIncorrecta(letra) {
    if (listaLetraIncorrecta.includes(letra) && juegoActivo) {
        alert("La letra ya fue usada");
    } else if (!palabraSplit.includes(letra)) {
        listaLetraIncorrecta.push(letra);
        var a = 400;
        var b = 400;
        let fallas = 0;
        var ejeX = 200;
        var ejeY = 300;
        for (var i = 0; i < listaLetraIncorrecta.length; i++) {
            llenarPalabra(listaLetraIncorrecta[i], a, b);
            a += 20;
            fallas++;
        }
        if (fallas == 1) {
            dibujarPosteAhorcadoV(ejeX, ejeY);
        }
        if (fallas == 2) {
            dibujarPosteAhorcadoH(ejeX - 3, ejeY);
        }
        if (fallas == 3) {
            dibujarPosteAhorcadoVAbajo(ejeX - 1, ejeY - 3);
        }
        if (fallas == 4) {
            dibujarCabezaAhorcado(ejeX, ejeY);
        }
        if (fallas == 5) {
            dibujarCuerpoAhorcado(ejeX, ejeY);
        }
        if (fallas == 6) {
            dibujarBrazoIzquierdo(ejeX, ejeY);
        }
        if (fallas == 7) {
            dibujarBrazoDerecho(ejeX, ejeY);
        }
        if (fallas == 8) {
            dibujarPieIzquierdo(ejeX, ejeY);
        }
        if (fallas == 9) {
            dibujarPieDerecho(ejeX, ejeY);
            gameOverMessage("Game Over", ejeX + 150, ejeY + 150);
            juegoActivo=false;
        }
        
    }
}


//Principales selectores
var botonIniciarJuego = document.querySelector("#iniciar-juego");
var botonAgregarPalabra = document.querySelector("#nueva-palabra");
var inputNuevaPalabra = document.querySelector("#input-nueva-palabra");

//boton iniciar juego
botonIniciarJuego.addEventListener("click", function (event) {
    event.preventDefault;
    console.log("palabra al azar es", palabraAzar);
    console.log("palabra split", palabraSplit);
    // dibujar lineas del ahorcado de la palabra random split
    var j = 400;
    var z = 500;
    for (var i = 0; i < palabraSplit.length; i++) {
        dibujarLineas("__", j, z);
        j += 20;
    }

    dibujarBaseAhorcado(200, 500);
    capturarLetra();

});

//boton ingresar nuevas palabras del usuario
botonAgregarPalabra.addEventListener("click", function (event) {
    event.preventDefault;
    listaDePalabras.push(inputNuevaPalabra.value.toLowerCase());
    inputNuevaPalabra.value = "";
    inputNuevaPalabra.focus();
});

/* dibujarPosteAhorcadoV(ejeX,ejeY);
dibujarPosteAhorcadoH(ejeX-3,ejeY);
dibujarPosteAhorcadoVAbajo(ejeX-1, ejeY-3);
dibujarCabezaAhorcado(ejeX,ejeY);
dibujarCuerpoAhorcado(ejeX, ejeY);
dibujarBrazoIzquierdo(ejeX,ejeY);
dibujarBrazoDerecho(ejeX,ejeY);
dibujarPieIzquierdo(ejeX, ejeY);
dibujarPieDerecho(ejeX, ejeY);*/
