
//Estas son los elementos del formulario
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

// Este es el dibujo con Canvas
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
//alert(ancho);
var lineas = 30;
var l=0;
//var yi, xf;
var tono1 = "#FF1744"
var tono2 = "#880E4F"
var tono3 = "#FF5733"
var tono4 = "#E040FB"
//while (l<lineas)
//{
    //dibujarLinea("blue", 0, 10*(l+1), 10*l, 300); 
    //xf= 10*(l+1);
    //yi=10*l;
    //dibujarLinea(tono1, 0, yi, xf, 300);
    //l=l+1;
    //console.log("Linea " + l); permite en consola validar cada elemento
//}
dibujarLinea(tono1, 1, 1, 1, 299);
dibujarLinea(tono1, 1, 299, 299, 299);

for (l=0; l < lineas; l++)
{
    yf= 10*(l+1);
    xi=10*l;
    dibujarLinea(tono2, xi, 0, 300, yf);
}
dibujarLinea(tono2, 299, 1, 1, 1);
dibujarLinea(tono2, 299, 1, 299, 299);
l=0;
do{
    xineg= 10*(l+1);
    yfneg=10*l;
    dibujarLinea(tono3, 0, 300-xineg, yfneg, 0);
    l=l+1;
}while (l<lineas);
l=0;
do{
    xineg= 10*(l+1);
    yfneg=10*l;
    dibujarLinea(tono4, 300, xineg, 300-yfneg, 300);
    l=l+1;
}while (l<lineas);

//alert ("prueba");
//dibujarLinea("red", 5, 5, 150, 150);
//dibujarLinea("green", 50, 50, -50, 50);
//dibujarLinea("black", 300, 0, 290, 300);
//dibujarLinea("black", 300, 10, 280, 300);
//dibujarLinea("black", 0, 300, 10, 0);
//dibujarLinea("black", 0, 290, 20, 0);

//lienzo.beginPath();
//lienzo.strokeStyle = "blue";
//lienzo.moveTo(100,100);
//lienzo.lineTo(-200,200);
//lienzo.stroke();
//lienzo.closePath();

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    //función que dibuja una linea
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoPorClick()
{
    //Función para dibujar cuando se hace click en el botón
    var x = parseInt(texto.value);
    var lineas = x;
   // var lineas = parseInt(texto.value);
    var l=0;
    var yi, xf;
    var tono1 = "#FF1744"
    while (l<lineas)
    {
        //dibujarLinea("blue", 0, 10*(l+1), 10*l, 300); 
        xf= (ancho/x)*(l+1);
        yi=(ancho/x)*l;
        dibujarLinea(tono1, 0, yi, xf, 300);
        l=l+1;
        //console.log("Linea " + l); permite en consola validar cada elemento
    }
    //console.log(texto);
    //alert("No me toques ahí " + x); definiendo previamente la variable
    //alert("No me toques ahí " + texto.value); sacando el valor directamente del elemento
}