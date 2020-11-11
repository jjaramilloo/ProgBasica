var jf = require ("johnny-five"); // traer la libreria
var circuito = new jf.Board(); // board es una clase

circuito.on("ready", prender);

function prender ()
{
    var ledamarillo = new jf.Led(13); //usa el puerto 13
    ledamarillo.blink(200); //función blink con el parametro tiempo se usa para titilar un LED
    var ledrojo = new jf.Led(9); //usa el puerto 9
    ledamarillo.blink(700);
}