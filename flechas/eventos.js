//alert("Prueba enlace con js");
//document.addEventListener("keydown", dibujarTeclado);
var teclas = {
    LEFT : 37,
    UP : 38,
    RIGHT: 39,
    DOWN :40
}; //jSON que guarda los valores de los nombres de las flechas segun el keycode
document.addEventListener("keyup", dibujarTeclado); //escuchar el evento del teclado, se usa keyup -cuando se libera la tecla para tener mayor control al dibujar
console.log(teclas);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d"); //el canbas se hace en 2d
var x= 150; //posición donde inicia el x para pintar con teclas
var y=150; //posición donde inicia el y para pintar con teclas
var colorcito = "#4A148C";
document.addEventListener("mouseup", dibujarMouse); //escuchar el evento del mouse, se usa mouseup para tener mayor control al dibujar


//dibujarLinea("red", 100, 100, 200, 200, papel);
//dibujarLinea("red", 149, 149, 151, 151, papel); //punto de inicio de forma estatica
dibujarLinea("black", x-1, y-1, x+1, y+1, papel); //punto de inicio de forma dinámica
var px; //posición en x para el mouse
var py; //posición en y para el mouse
var estado = 0; // estado del click

function dibujarMouse(click)
{
    //función que detecta posicion del mousea para dibujar la línea
    // alert("prueba mouse");
   //console.log("X " + click.layerX);
   //console.log("Y " + click.layerY);
   if (estado == 0)
   {
    dibujarLinea(colorcito, x, y, click.layerX, click.layerY, papel);
   }
   px = click.layerX;
   py = click.layerY;
}

function dibujarTeclado(evento)
{
    //función que detecta que tecla se libera para dibujar la línea
    //var colorcito = "#4A148C";
    var movimiento = 3;  //este es la distancia entre las lineas, a medida que es menor las lineas quedan mas suaves
    switch(evento.keyCode)
    {
        case teclas.LEFT:
            //console.log("Va a la izquierda");            
            dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.UP:
            //console.log("Va arriba");
            dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.RIGHT:
            //console.log("Va a la derecha");
            dibujarLinea(colorcito, x, y, x+movimiento, y, papel);
            x = x + movimiento;
        break;
        case teclas.DOWN: 
           //console.log("Va abajo");
           dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
           y = y + movimiento;
        break;
        default:
            console.log("Otra tecla");
        break;
    }
     //alert("prueba teclado");
    //console.log("Tecla presionada");
    //console.log(evento.keyCode);
    //if (evento.keyCode == teclas.LEFT)
    //{
    //    console.log("Va a la izquierda");
    //}
    //if (evento.keyCode == teclas.UP)
    //{
     //   console.log("Va arriba");
    //}
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    //función que dibuja una linea
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}