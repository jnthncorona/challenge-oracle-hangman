var myCanvas = document.querySelector("#ahorcado");
var pincel = myCanvas.getContext("2d");

//funcion dibujar canvas
function dibujarCanvas (){
    pincel.fillStyle = "lightblue";
    pincel.fillRect(0,0,1200,800);
    pincel.stroke();
}
//funcion para llenar palabras
function llenarPalabra(string, x, y){
    pincel.fillText(string, x, y);
    pincel.stroke();
}

//funcion Game Over
function gameOverMessage(string, x, y){
    pincel.fillText(string, x, y);
    pincel.stroke();
}
//funcion Ganastes
function ganastesMessage(string, x, y){
    pincel.fillText(string, x, y);
    pincel.stroke();
}
//f
//funcion para dibujar lineas
function dibujarLineas(linea, j,z){
    pincel.fillText(linea, j, z);
}

//dibujar base de la horca
function dibujarBaseAhorcado(x,y){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(x,y);
    pincel.lineTo(x-40,y+30);
    pincel.lineTo(x+40,y+30);
    pincel.fill();
}

//dibujar poste vertical de la horca
function dibujarPosteAhorcadoV(x,y){
    pincel.lineWidth = 5;
    pincel.moveTo(x,y);
    pincel.lineTo(x,y+201);
    pincel.stroke();
}

//dibujar poste horizontal de la horca
function dibujarPosteAhorcadoH(x,y){
    pincel.lineWidth = 5;
    pincel.moveTo(x,y);
    pincel.lineTo(x+105,y);
    pincel.stroke();
}

//dibujar poste vertical haci abajo de la horca
function dibujarPosteAhorcadoVAbajo(x,y){
    pincel.lineWidth = 5;
    pincel.moveTo(x+105,y);
    pincel.lineTo(x+105,y+60);
    pincel.stroke();
}

//dibujar cabeza del ahorcado
function dibujarCabezaAhorcado(x,y){
    pincel.fillStyle = "black";
    pincel.beginPath(x,y);
    pincel.arc(x+105,y+73,15,0,2*3.14);
    //pincel.fill();
    pincel.stroke();
}

//dibujar cuerpo del ahorcado
function dibujarCuerpoAhorcado(x,y){
    pincel.lineWidth = 2;
    pincel.moveTo(x+105,y+90);
    pincel.lineTo(x+105,y+160);
    pincel.stroke();
}
//dibujar brazo izquierdo
function dibujarBrazoIzquierdo(x,y){
    pincel.lineWidth = 2;
    pincel.moveTo(x+105,y+110);
    pincel.lineTo(x+70,y+80);
    pincel.stroke();
}

//dibujar brazo derecho
function dibujarBrazoDerecho(x,y){
    pincel.lineWidth = 2;
    pincel.moveTo(x+105,y+110);
    pincel.lineTo(x+140,y+80);
    pincel.stroke();
}

//dibujar pie izquierdo
function dibujarPieIzquierdo(x,y){
    pincel.lineWidth = 2;
    pincel.moveTo(x+105,y+160);
    pincel.lineTo(x+70,y+190);
    pincel.stroke();
}

//dibujar pie derecho
function dibujarPieDerecho(x,y){
    pincel.lineWidth = 2;
    pincel.moveTo(x+105,y+160);
    pincel.lineTo(x+140,y+190);
    pincel.stroke();
}