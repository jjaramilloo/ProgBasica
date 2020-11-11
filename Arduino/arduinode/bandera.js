const { setTimeout } = require("timers");

var cinco = rquire ("johnny-five"); //carga la libreria
var circuito = new cinco.Board();
var bombillo, motor, celda;
var turno = 0;

circuito.on("ready", prender);

function prender()
{
    var configuracion = {pin:"A0", freq:50}; //es un json donde tiene los atributos del pin y la frecuencia que depende del componente, para la fotocelta es 50
    celda = new cinco.Sensor(configuracion);
    bombillo = new cinco.Led(13); //el parametro es el puerto que usa, 13
    bombillo.on();
    motor = new cinco.Servo(9) // el parametro es el puerto que usa, 9
    motor.to(90); //el parametro son los grados
    ondear();
}

function ondear()
{
    console.log("Luz: " + celda.value);
    var luz = celda.value;
    if (luz > 800)
    {
        if (turno == 1)
        {
            turno ==0;
            motor.to(70);
        }
        else
        {
            turno == 1;
            motor.to(110);
        }
      
    }
    else
    {
        motor.to(150);
    }
    setTimeout(ondear, 1000); // permite ejecutar una función repetidamente según un tiempo

}