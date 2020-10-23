//alert("Prueba enlace con js");
//document.addEventListener("keydown", dibujarTeclado);
var teclas = {
    LEFT : 37,
    UP : 38,
    RIGHT: 39,
    DOWN :40
};
document.addEventListener("keyup", dibujarTeclado);
console.log(teclas);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");

//dibujarLinea("red", 100, 100, 200, 200, papel);
dibujarLinea("red", 149, 149, 151, 151, papel); //punto de inicio

function dibujarTeclado(evento)
{
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
    switch(evento.keyCode)
    {
        case teclas.LEFT:
            console.log("Va a la izquierda");
        break;
        case teclas.UP:
            console.log("Va arriba");
        break;
        case teclas.RIGHT:
            console.log("Va a la derecha");
        break;
        case teclas.DOWN: 
           console.log("Va abajo");
        break;
        default:
            console.log("Otra tecla");
        break;
    }
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