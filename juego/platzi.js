var vp = document.getElementById("villaplatzi"); //En esta variable queda el contexto
var papel = vp.getContext ("2d"); //La definición del lienzo o papel

var fondo = {
    url: "tile.png",
    cargarOK: false
}; // ¿por que un json? porque tienen varios atributos
var vaca = {
    url: "vaca.png",
    cargarOK: false
};
var cerdo = {
    url: "cerdo.png",
    cargarOK: false
};
var pollo = {
    url: "pollo.png",
    cargarOK: false
};

var teclas = {
    LEFT : 37,
    UP : 38,
    RIGHT: 39,
    DOWN :40
};
document.addEventListener("keyup", moverTeclado)

var cantidad = aletorio(1,10);

fondo.imagen = new Image(); //Es la creación de un objeto, para nombrarlo se hacer con mayuscula al inicio
fondo.imagen.src = fondo.url; //se pasa la url por el atributo src
fondo.imagen.addEventListener("load", cargarFondo); //se escucha el evento de carga

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
    fondo.cargarOK =true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargarOK =true;
    dibujar();
}
function cargarCerdos()
{
    cerdo.cargarOK =true;
    dibujar();
}
function cargarPollos()
{
    pollo.cargarOK =true;
    dibujar();
}

function dibujar()
{
    if (fondo.cargarOK) //no  requiere el == true dado que la caracteristica es un booleano y no require una operacion
    {
        papel.drawImage(fondo.imagen, 0, 0); //al darle la posicion 0,0 esta diciendo que cargue completa la imagen
    }
    if (vaca.cargarOK);
    {
        console.log(cantidad);
        for(var v=0; v < cantidad; v++)
        {
            var x = aletorio(0,7);
            var y = aletorio(0,10);
            var x = x * 60; // ¿por qué se vuelve a declarar?
            var y = y * 40;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargarOK);
    {
        console.log(cantidad);
        for(var c=0; c < cantidad; c++)
        {
            var x = aletorio(0,7);
            var y = aletorio(0,10);
            var x = x * 60; // ¿por qué se vuelve a declarar?
            var y = y * 40;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if (pollo.cargarOK);
    {
        console.log(cantidad);
        for(var p=0; p < cantidad; p++)
        {
            var x = aletorio(0,7);
            var y = aletorio(0,10);
            var x = x * 60; // ¿por qué se vuelve a declarar?
            var y = y * 40;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}
function aletorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}
var x = aletorio(0,10);
var y = aletorio(0,10);

function moverTeclado(evento)
{
    var movimiento = 3;  //este es la distancia entre las lineas, a medida que es menor las lineas quedan mas suaves
    switch(evento.keyCode)
    {
        case teclas.LEFT:
            //console.log("Va a la izquierda");            
            papel.drawImage(cerdo.imagen, x, y);
            x = x - movimiento;
        break;
        case teclas.UP:
            //console.log("Va arriba");
            papel.drawImage(cerdo.imagen, x, y);
            y = y - movimiento;
        break;
        case teclas.RIGHT:
            //console.log("Va a la derecha");
            papel.drawImage(cerdo.imagen, x, y);
            x = x + movimiento;
        break;
        case teclas.DOWN: 
           //console.log("Va abajo");
           papel.drawImage(cerdo.imagen, x, y);
           y = y + movimiento;
        break;
        default:
            console.log("Otra tecla");
        break;
    }
}   
//var mapa = "tile.png";
//var fondo = new Image(); //Es la creación de un objeto, para nombrarlo se hacer con mayuscula al inicio
//fondo.src = mapa; //se pasa la url por el atributo src
//fondo.addEventListener("load", dibujar); //se escucha el evento de carga
//var cerdo = new Image();
//cerdo.src = "cerdo.png";
//var pollo = new Image();
//pollo.src = "pollo.png";